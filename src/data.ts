export const example = {
    "title": "Task Status",
    "width": 6,
    "config": {
        "type": "line",
        "subType": "basic",
        "options": {
            "title": { "text": "Revenue Growth" },
            "tooltip": { "trigger": "axis" },
            "xAxis": { "type": "category" },
            "yAxis": { "type": "value" },
            "series": [{ "type": "line", "name": "Sales", smooth: true }]
        }
    },
    "source": {
        "type": "sql",
        "table": "leads_tbl",
        "cols": "count(leads_tbl.id) as value,leads_tbl.lead_status as category",
        "where": {
            "leads_tbl.blocked": "false",
            "leads_tbl.guid='{$_SESSION['SESS_GUID']}'": "RAW",
            "lead_date >='{$startDate}'": "RAW",
            "lead_date <='{$endDate}'": "RAW",
            "(leads_tbl.assigned_to='{$_SESSION['SESS_USER_ID']}' OR leads_tbl.open_by='{$_SESSION['SESS_USER_ID']}' OR leads_tbl.manager = '{$_SESSION['SESS_USER_ID']}' OR {$_SESSION['SESS_PRIVILEGE_ID']} <= {$ADMIN_PRIVILEGE_RANGE})": "RAW"
        },
        "groupby": "leads_tbl.lead_status"
    }


}

export const exapmle1 = {
    "title": "Tasks By Status",
    "width": 6,
    "config": {
        "type": "bar",
        "subType": "stacked",
        "options": {
            "title": { "text": "Sales" },
            "xAxis": { "type": "category" },
            "yAxis": { "type": "value" },
            "series": [{ "type": "bar" }]
        }
    },
    "source": { "type": "method", "method": "getTaskDataByStatus" }
}
