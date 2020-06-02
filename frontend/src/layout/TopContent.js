import './TopContent.scss'

import React from 'react'
import { LatestVersion } from '~/layout/LatestVersion'
import { User } from '~/layout/User'
import { WorkerStats } from '~/layout/WorkerStats'
import Onboarding from '~/layout/onboarding'

export function TopContent() {
    return (
        <div>
            <div
                className="layout-top-content right-align"
                style={{
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'center',
                    alignItems: 'center',
                    fontSize: 13,
                }}
            >
                <Onboarding />
                <LatestVersion />
                <WorkerStats />
                <User />
            </div>
        </div>
    )
}
