export declare function normalizeData(data: any[], config: any): {
    categories: never[];
    series: {
        name: any;
        value: number;
    }[];
    xCategories?: never;
    yCategories?: never;
} | {
    xCategories: any[];
    yCategories: any[];
    series: {
        name: any;
        data: number[][];
    }[];
    categories?: never;
} | {
    categories: any[];
    series: {
        name: any;
        data: number[];
    }[];
    xCategories?: never;
    yCategories?: never;
} | {
    categories: any[];
    series: {
        name: string;
        data: number[] | undefined;
    }[];
    xCategories?: never;
    yCategories?: never;
};
export declare function extractRows(result: any): any;
//# sourceMappingURL=utils.d.ts.map