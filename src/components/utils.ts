

export const normalizeForPie = (rows: any[]) => {
  return rows.map(r => ({
    name: r.category,                                  // generic label
    value: Object.values(r).find(v => typeof v === "number")
  }));
};
// ChartRenderer.tsx
export const normalizeForXYCharts = (rows: any[]) => {
  const keys = Object.keys(rows[0]);
  const categoryKey = "category";                      // generic column
  const seriesKeys = keys.filter(k => k !== categoryKey);

  return {
    categories: rows.map(r => r[categoryKey]),
    series: seriesKeys.map(k => ({
      name: k,
      data: rows.map(r => Number(r[k] ?? 0))
    }))
  };
};



export function normalizeData(result: any, config: any) {

  // Safety fallback
  if (!Array.isArray(result) || result.length === 0) {
    return { categories: [], series: [] };
  }

  // Pie / Donut / Rose charts expect { name, value }[]
  if (["pie", "donut", "rose"].includes(config.type)) {
    return normalizeForPie(result);
  }

  // Line / Bar / Area / Stacked charts expect { categories, series[] }
  return normalizeForXYCharts(result);
}

