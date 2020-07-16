// Auto-generated with kea-typegen. DO NOT EDIT!

export interface toolbarLogicType {
    actionCreators: {
        authenticate: () => ({
            type: "authenticate (frontend.src.toolbar.toolbarLogic)";
            payload: {
                value: boolean;
            };
        });
    };
    actions: {
        authenticate: () => ({
            type: "authenticate (frontend.src.toolbar.toolbarLogic)";
            payload: {
                value: boolean;
            };
        });
    };
    cache: Record<string, any>;
    path: ["frontend", "src", "toolbar", "toolbarLogic"];
    pathString: "frontend.src.toolbar.toolbarLogic";
    props: Record<string, any>;
    reducer: (state: any, action: () => any, fullState: any) => {
        rawApiURL: string;
        rawJsURL: string;
        temporaryToken: string | null;
        actionId: number | null;
        userIntent: string | null;
    };
    reducers: {
        rawApiURL: (state: string, action: any, fullState: any) => string;
        rawJsURL: (state: string, action: any, fullState: any) => string;
        temporaryToken: (state: string | null, action: any, fullState: any) => string | null;
        actionId: (state: number | null, action: any, fullState: any) => number | null;
        userIntent: (state: string | null, action: any, fullState: any) => string | null;
    };
    selector: (state: any) => {
        rawApiURL: string;
        rawJsURL: string;
        temporaryToken: string | null;
        actionId: number | null;
        userIntent: string | null;
    };
    selectors: {
        rawApiURL: (state: any, props: any) => string;
        rawJsURL: (state: any, props: any) => string;
        temporaryToken: (state: any, props: any) => string | null;
        actionId: (state: any, props: any) => number | null;
        userIntent: (state: any, props: any) => string | null;
        apiURL: (state: any, props: any) => string;
        jsURL: (state: any, props: any) => string;
        isAuthenticated: (state: any, props: any) => boolean;
    };
    values: {
        rawApiURL: string;
        rawJsURL: string;
        temporaryToken: string | null;
        actionId: number | null;
        userIntent: string | null;
        apiURL: string;
        jsURL: string;
        isAuthenticated: boolean;
    };
    _isKea: true;
    __selectorTypeHelp: {
        apiURL: (arg1: string) => string;
        jsURL: (arg1: string) => string;
        isAuthenticated: (arg1: string) => boolean;
    };
}