import React, { useRef, useEffect, useState } from 'react'
import FunnelGraph from 'funnel-graph-js'
import { Link } from 'lib/components/Link'
import { Loading, humanFriendlyDuration } from 'lib/utils'
import PropTypes from 'prop-types'
import { useValues, useActions } from 'kea'
import { funnelVizLogic } from 'scenes/funnels/funnelVizLogic'

export function FunnelViz({ funnel: funnelParam, dashboardItemId, funnelId }) {
    const container = useRef()
    const [funnel, setFunnel] = useState(funnelParam)
    const logic = funnelVizLogic({ funnelId, dashboardItemId })
    const { results: funnelResult, resultsLoading: funnelLoading } = useValues(logic)
    const { loadResults: loadFunnel } = useActions(logic)

    function buildChart() {
        if (!funnel || funnel.steps.length == 0) return
        if (container.current) container.current.innerHTML = ''
        let graph = new FunnelGraph({
            container: '.funnel-graph',
            data: {
                labels: funnel.steps.map(
                    (step) =>
                        `${step.name} (${step.count})  ${
                            step.average_time ? 'Avg Time: ' + humanFriendlyDuration(step.average_time) || '' : ''
                        }`
                ),
                values: funnel.steps.map((step) => step.count),
                colors: ['#66b0ff', 'var(--blue)'],
            },
            displayPercent: true,
        })
        graph.createContainer = () => {}
        graph.container = container.current
        graph.graphContainer = document.createElement('div')
        graph.graphContainer.classList.add('svg-funnel-js__container')
        graph.container.appendChild(graph.graphContainer)

        graph.draw()
    }

    useEffect(() => {
        if (funnel) buildChart()
        else loadFunnel()

        window.addEventListener('resize', buildChart)
        return window.removeEventListener('resize', buildChart)
    }, [])

    useEffect(() => {
        buildChart()
    }, [funnel])

    useEffect(() => {
        setFunnel(funnelParam)
    }, [funnelParam])

    useEffect(() => {
        if (funnelResult) {
            setFunnel(funnelResult)
        }
    }, [funnelResult])

    return funnel && !funnelLoading ? (
        funnel.steps.length > 0 ? (
            <div
                data-attr="funnel-viz"
                ref={container}
                className="svg-funnel-js"
                style={{ height: '100%', width: '100%' }}
            ></div>
        ) : (
            <p style={{ margin: '1rem' }}>
                This funnel doesn't have any steps.{' '}
                <Link to={'/funnel/' + funnel.id}>Click here to add some steps.</Link>
            </p>
        )
    ) : (
        <Loading />
    )
}

FunnelViz.propTypes = {
    funnel: PropTypes.object,
    funnelId: PropTypes.number,
}
