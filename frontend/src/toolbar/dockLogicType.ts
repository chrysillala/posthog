// Auto-generated with kea-typegen. DO NOT EDIT!

export interface dockLogicType<ToolbarMode, ToolbarAnimationState> {
    key: any
    actionCreators: {
        button: () => {
            type: 'button (frontend.src.toolbar.dockLogic)'
            payload: {
                value: boolean
            }
        }
        dock: () => {
            type: 'dock (frontend.src.toolbar.dockLogic)'
            payload: {
                value: boolean
            }
        }
        hideButton: () => {
            type: 'hide button (frontend.src.toolbar.dockLogic)'
            payload: {
                value: boolean
            }
        }
        update: () => {
            type: 'update (frontend.src.toolbar.dockLogic)'
            payload: {
                value: boolean
            }
        }
        buttonAnimated: () => {
            type: 'button animated (frontend.src.toolbar.dockLogic)'
            payload: {
                value: boolean
            }
        }
        buttonFaded: () => {
            type: 'button faded (frontend.src.toolbar.dockLogic)'
            payload: {
                value: boolean
            }
        }
        dockAnimated: () => {
            type: 'dock animated (frontend.src.toolbar.dockLogic)'
            payload: {
                value: boolean
            }
        }
        dockFaded: () => {
            type: 'dock faded (frontend.src.toolbar.dockLogic)'
            payload: {
                value: boolean
            }
        }
        hideButtonAnimated: () => {
            type: 'hide button animated (frontend.src.toolbar.dockLogic)'
            payload: {
                value: boolean
            }
        }
        setMode: (
            mode: ToolbarMode,
            update?: boolean
        ) => {
            type: 'set mode (frontend.src.toolbar.dockLogic)'
            payload: { mode: ToolbarMode; update: boolean; windowWidth: number; windowHeight: number }
        }
    }
    actionKeys: {
        'button (frontend.src.toolbar.dockLogic)': 'button'
        'dock (frontend.src.toolbar.dockLogic)': 'dock'
        'hide button (frontend.src.toolbar.dockLogic)': 'hideButton'
        'update (frontend.src.toolbar.dockLogic)': 'update'
        'button animated (frontend.src.toolbar.dockLogic)': 'buttonAnimated'
        'button faded (frontend.src.toolbar.dockLogic)': 'buttonFaded'
        'dock animated (frontend.src.toolbar.dockLogic)': 'dockAnimated'
        'dock faded (frontend.src.toolbar.dockLogic)': 'dockFaded'
        'hide button animated (frontend.src.toolbar.dockLogic)': 'hideButtonAnimated'
        'set mode (frontend.src.toolbar.dockLogic)': 'setMode'
    }
    actionTypes: {
        button: 'button (frontend.src.toolbar.dockLogic)'
        dock: 'dock (frontend.src.toolbar.dockLogic)'
        hideButton: 'hide button (frontend.src.toolbar.dockLogic)'
        update: 'update (frontend.src.toolbar.dockLogic)'
        buttonAnimated: 'button animated (frontend.src.toolbar.dockLogic)'
        buttonFaded: 'button faded (frontend.src.toolbar.dockLogic)'
        dockAnimated: 'dock animated (frontend.src.toolbar.dockLogic)'
        dockFaded: 'dock faded (frontend.src.toolbar.dockLogic)'
        hideButtonAnimated: 'hide button animated (frontend.src.toolbar.dockLogic)'
        setMode: 'set mode (frontend.src.toolbar.dockLogic)'
    }
    actions: {
        button: () => void
        dock: () => void
        hideButton: () => void
        update: () => void
        buttonAnimated: () => void
        buttonFaded: () => void
        dockAnimated: () => void
        dockFaded: () => void
        hideButtonAnimated: () => void
        setMode: (mode: ToolbarMode, update?: boolean) => void
    }
    cache: Record<string, any>
    connections: any
    constants: any
    defaults: any
    events: any
    path: ['frontend', 'src', 'toolbar', 'dockLogic']
    pathString: 'frontend.src.toolbar.dockLogic'
    propTypes: any
    props: Record<string, any>
    reducer: (
        state: any,
        action: () => any,
        fullState: any
    ) => {
        windowWidth: number
        windowHeight: number
        windowScroll: number
        mode: ToolbarMode
        lastMode: ToolbarMode
        dockStatus: ToolbarAnimationState
        buttonStatus: ToolbarAnimationState
    }
    reducerOptions: any
    reducers: {
        windowWidth: (state: number, action: any, fullState: any) => number
        windowHeight: (state: number, action: any, fullState: any) => number
        windowScroll: (state: number, action: any, fullState: any) => number
        mode: (state: ToolbarMode, action: any, fullState: any) => ToolbarMode
        lastMode: (state: ToolbarMode, action: any, fullState: any) => ToolbarMode
        dockStatus: (state: ToolbarAnimationState, action: any, fullState: any) => ToolbarAnimationState
        buttonStatus: (state: ToolbarAnimationState, action: any, fullState: any) => ToolbarAnimationState
    }
    selector: (
        state: any
    ) => {
        windowWidth: number
        windowHeight: number
        windowScroll: number
        mode: ToolbarMode
        lastMode: ToolbarMode
        dockStatus: ToolbarAnimationState
        buttonStatus: ToolbarAnimationState
    }
    selectors: {
        windowWidth: (state: any, props: any) => number
        windowHeight: (state: any, props: any) => number
        windowScroll: (state: any, props: any) => number
        mode: (state: any, props: any) => ToolbarMode
        lastMode: (state: any, props: any) => ToolbarMode
        dockStatus: (state: any, props: any) => ToolbarAnimationState
        buttonStatus: (state: any, props: any) => ToolbarAnimationState
        isAnimating: (state: any, props: any) => boolean
        sidebarWidth: (state: any, props: any) => number
        padding: (state: any, props: any) => number
        bodyWidth: (state: any, props: any) => number
        zoom: (state: any, props: any) => number
        domZoom: (state: any, props: any) => number
        domPadding: (state: any, props: any) => number
        dockTopMargin: (state: any, props: any) => number
    }
    values: {
        windowWidth: number
        windowHeight: number
        windowScroll: number
        mode: ToolbarMode
        lastMode: ToolbarMode
        dockStatus: ToolbarAnimationState
        buttonStatus: ToolbarAnimationState
        isAnimating: boolean
        sidebarWidth: number
        padding: number
        bodyWidth: number
        zoom: number
        domZoom: number
        domPadding: number
        dockTopMargin: number
    }
    _isKea: true
    __keaTypeGenInternalSelectorTypes: {
        isAnimating: (arg1: ToolbarAnimationState, arg2: ToolbarAnimationState) => boolean
        padding: (arg1: number) => number
        bodyWidth: (arg1: number, arg2: number, arg3: number) => number
        zoom: (arg1: number, arg2: number) => number
        domZoom: (arg1: number, arg2: ToolbarMode) => number
        domPadding: (arg1: number, arg2: ToolbarMode) => number
        dockTopMargin: (arg1: number) => number
    }
}
