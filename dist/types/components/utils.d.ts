export declare function formatLabel(value: unknown): string;
export declare function normalizeData(data: any[], config: any): {
    categories: never[];
    series: {
        name: string;
        value: number;
    }[];
    xCategories?: never;
    yCategories?: never;
} | {
    xCategories: string[];
    yCategories: string[];
    series: {
        name: string;
        data: number[][];
    }[];
    categories?: never;
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