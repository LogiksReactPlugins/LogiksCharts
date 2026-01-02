

export interface GrpahJson {
    title?: string | undefined;


}

export interface GraphConfig {
    title: string;
    config: Record<string, any>;
    source: Record<string, any>;
    width?: number;
    height?:number;
    card_type?: string;
    policy?: string;
}

export interface CardProps {
    config: GraphConfig;
    methods?: Record<string, Function>;
}



export interface GraphRendererProps {
    graph_config: GraphConfig;
    methods?: Record<string, Function>;
    sqlOpsUrls: Record<string, any> | undefined;
}

export interface GraphProps {

    config: GraphConfig;
    methods?: Record<string, Function>;
    sqlOpsConfig: Record<string, any> | undefined;


}
