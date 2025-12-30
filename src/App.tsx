
import LogiksGraph from "./components/logiksGraph/index.js";

import { exapmle1 } from "./data.js";

function App() {
    const getTaskStatus = () => ({
        categories: ["Jan", "Feb", "Mar", "Apr"],
        series: [
            { name: "Sales", data: [200, 500, 800, 650] }
        ]
    });

    const getTaskDataByStatus = () => ({
        categories: ["Open", "In Progress", "Done", "On Hold"],
        series: [
            { name: "Tasks", data: [30, 45, 28, 10] }
        ]
    });

    const getPendingTask = () => ([
        { id: 101, title: "Client Follow-up", priority: "High" },
        { id: 102, title: "Prepare Sales Report", priority: "Medium" },
        { id: 103, title: "Project Deployment", priority: "High" }
    ]);

    const getWorkLoadTask = () => ({
        categories: ["Mon", "Tue", "Wed", "Thu", "Fri"],
        series: [
            { name: "Workload", data: [30, 60, 50, 75, 90] }
        ]
    });

    const getTotalRevenue = () => 321000;
    const getTotalWonLostRatio = () => "15:3";
    const getTotalEnquiry = () => 1200;
    const getTotalDeal = () => 350;

    const getTaskDataByUser = () => {
        return {
            series: [
                { name: "Electronics", value: 120 },
                { name: "Fashion", value: 80 },
                { name: "Grocery", value: 60 }
            ]
        }

    }


    return (
        <div style={{ height: 800 }}>
            <LogiksGraph
                config={exapmle1}
                methods={{
                    getTaskStatus, getTaskDataByStatus, getPendingTask, getWorkLoadTask,
                    getTotalRevenue, getTotalWonLostRatio, getTotalEnquiry, getTotalDeal,
                    getTaskDataByUser

                }}
                sqlOpsConfig={{}}

            />
        </div>
    )
}

export default App
