export declare const exapmle: {
    title: string;
    width: number;
    config: {
        type: string;
        subType: string;
        options: {
            title: {
                text: string;
            };
            tooltip: {
                trigger: string;
            };
            xAxis: {
                type: string;
            };
            yAxis: {
                type: string;
            };
            series: {
                type: string;
                name: string;
                smooth: boolean;
            }[];
        };
    };
    source: {
        type: string;
        table: string;
        cols: string;
        where: {
            "lead_tbl.blocked": string;
            "lead_tbl.guid='{$_SESSION['SESS_GUID']}'": string;
            "lead_date >='{$startDate}'": string;
            "lead_date <='{$endDate}'": string;
            "(lead_tbl.assigned_to='{$_SESSION['SESS_USER_ID']}' OR lead_tbl.open_by='{$_SESSION['SESS_USER_ID']}' OR lead_tbl.manager = '{$_SESSION['SESS_USER_ID']}' OR {$_SESSION['SESS_PRIVILEGE_ID']} <= {$ADMIN_PRIVILEGE_RANGE})": string;
        };
        groupby: string;
    };
};
export declare const exapmle1: {
    title: string;
    width: number;
    config: {
        type: string;
        subType: string;
        options: {
            title: {
                text: string;
            };
            xAxis: {
                type: string;
            };
            yAxis: {
                type: string;
            };
            series: {
                type: string;
            }[];
        };
    };
    source: {
        type: string;
        method: string;
    };
};
//# sourceMappingURL=data.d.ts.map