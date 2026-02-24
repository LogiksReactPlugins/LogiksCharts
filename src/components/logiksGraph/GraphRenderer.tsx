
import { useEffect, useState } from "react";
import type { GraphProps, sqlQueryProps } from "./Grpah.types.js";
import BarChart from "../graphs/BarChart.js";
import LineChart from "../graphs/LineChart.js";
import PieChart from "../graphs/PieChart.js";
import { extractRows, normalizeData } from "../utils.js";
import { fetchDataByquery } from "../service.js";
import BubbleChart from "../graphs/BubbleChart.js";
import FunnelChart from "../graphs/FunnelChart.js";
import HeatmapChart from "../graphs/HeatMap.js";




const GraphRenderer = ({ graph_config, methods = {}, sqlOpsConfig, module_refid }: GraphProps) => {

  if (!graph_config?.config?.type) return null;

  const { config, source } = graph_config;


  console.log("source", source);

  const [data, setData] = useState<any>({ categories: [], series: [] });

  useEffect(() => {
    const load = async () => {
      let result = {};
      console.log("source?.type", source?.type);

      if (source?.type === "method") {
        const fn = methods[source.method as keyof typeof methods];
        result = fn ? await Promise.resolve(fn()) : {};
        console.log("result", result);

      } else if (source?.type === "api" && source.url) {
        result = await fetch(source.url, {
          method: source.method || "GET",
          headers: source.headers || {},
        }).then(r => r.json());
      } else if (source?.type === "sql" && sqlOpsConfig) {


        try {

          let query: sqlQueryProps | undefined;
          if (!source.queryid) {
            query = {
              table: source.table,
              cols: source.columns ?? source.cols,
              where: source.where ?? {},
              orderby: source.orderby ?? "",
              groupby: source.groupby ?? ""
            };
          }

          result = await fetchDataByquery(sqlOpsConfig, query, source?.queryid, undefined, module_refid);


        } catch (err) {
          console.error("API fetch failed:", err);
        }

      }


      const rows = extractRows(result);

      if (config.type === "bubble" || config.type === "scatter") {
        setData(rows);
      } else {
        const normalized = normalizeData(rows, config);
        setData(normalized);
      }


    };

    load();
  }, [source?.method, source?.url, source?.type, config.type]);

  

  switch (graph_config?.config.type) {

    case "bar": return <BarChart config={config} data={data} />;
    case "line": return <LineChart config={config} data={data} />;
    case "pie": return <PieChart config={config} data={data} />;
    case "scatter":
    case "bubble": return <BubbleChart config={config} data={data} />;
    case "funnel": return <FunnelChart config={config} data={data} />;
    case "heatmap": return <HeatmapChart config={config} data={data} />;

    default:
      return <div className="text-red-500">Unknown chart type: {config.type}</div>;
  }
};

export default GraphRenderer;