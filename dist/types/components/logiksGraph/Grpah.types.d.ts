export interface GrpahJson {
    title?: string | undefined;
}
export interface GraphConfig {
    title: string;
    config: Record<string, any>;
    source: Record<string, any>;
    width?: number;
    height?: number;
    card_type?: string;
    policy?: string;
}
export interface CardProps {
    config: GraphConfig;
    methods?: Record<string, Function>;
}
export type ApiResponse<T = any> = {
    success?: boolean;
    message?: string;
    data: T;
};
export interface sqlQueryProps {
    table: string;
    cols: string;
    where?: Record<string, string>;
    orderby?: string;
    groupby?: string;
}
export interface GraphProps {
    graph_config: GraphConfig;
    methods?: Record<string, Function>;
    sqlOpsConfig: Record<string, any> | undefined;
    module_refid: string | undefined;
}
//# sourceMappingURL=Grpah.types.d.ts.map