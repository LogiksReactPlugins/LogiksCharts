export declare function normalizeData(data: any[], config: any): {
    categories: never[];
    series: {
        name: any;
        value: number;
    }[];
} | {
    categories: any[];
    series: {
        name: any;
        data: number[];
    }[];
} | {
    categories: any[];
    series: {
        name: string;
        data: number[] | undefined;
    }[];
};
export declare function extractRows(result: any): any;
//# sourceMappingURL=utils.d.ts.map