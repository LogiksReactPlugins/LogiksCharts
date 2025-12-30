export const exapmle = {
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
        "table": "lead_tbl",
        "cols": "count(lead_tbl.id) as value,lead_tbl.lead_status as title",
        "where": {
            "lead_tbl.blocked": "false",
            "lead_tbl.guid='{$_SESSION['SESS_GUID']}'": "RAW",
            "lead_date >='{$startDate}'": "RAW",
            "lead_date <='{$endDate}'": "RAW",
            "(lead_tbl.assigned_to='{$_SESSION['SESS_USER_ID']}' OR lead_tbl.open_by='{$_SESSION['SESS_USER_ID']}' OR lead_tbl.manager = '{$_SESSION['SESS_USER_ID']}' OR {$_SESSION['SESS_PRIVILEGE_ID']} <= {$ADMIN_PRIVILEGE_RANGE})": "RAW"
        },
        "groupby": "lead_tbl.lead_status"
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
