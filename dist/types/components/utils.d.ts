export declare const normalizeForPie: (rows: any[]) => {
    name: any;
    value: number | undefined;
}[];
export declare const normalizeForXYCharts: (rows: any[]) => {
    categories: any[];
    series: {
        name: string;
        data: number[];
    }[];
};
export declare function normalizeData(result: any, config: any): {
    name: any;
    value: number | undefined;
}[] | {
    categories: any[];
    series: {
        name: string;
        data: number[];
    }[];
};
//# sourceMappingURL=utils.d.ts.map