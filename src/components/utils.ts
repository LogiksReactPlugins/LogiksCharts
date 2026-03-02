export function formatLabel  (value: unknown): string  {
  if (typeof value !== "string") return String(value ?? "");

  return value
    .replace(/_/g, " ")          // in_progress → in progress
    .toLowerCase()               // normalize case
    .split(" ")
    .filter(Boolean)
    .map(w => w[0]?.toUpperCase() + w.slice(1))
    .join(" ");                  // In Progress
};


export function normalizeData(data: any[], config: any) {
  if (!Array.isArray(data) || data.length === 0)
    return { categories: [], series: [] };

  const sample = data[0];
  const keys = Object.keys(sample);

  const label = config.labelKey ||
    keys.find(k => typeof sample[k] !== "number") || keys[0];

  const value = config.valueKey ||
    keys.find(k => typeof sample[k] === "number") || keys[1];

  const group = config.seriesKey;

  // PIE/DONUT — unified return shape 
  if (["pie", "donut", "rose", "funnel"].includes(config.type)) {
    return {
      categories: [],
      series: data.map(r => ({
        name: formatLabel(r[label]),
        value: Number(r[value]) || 0     // TS Safe
      }))
    };
  }

  if (config.type === "heatmap") {
    const xKey = config.xKey || keys[0];   // e.g. hour
    const yKey = config.yKey || keys[1];   // e.g. day
    const vKey = config.valueKey || keys.find(k => typeof sample[k] === "number");

    const xCategories = [...new Set(data.map(r => formatLabel(r[xKey])))];
    const yCategories = [...new Set(data.map(r => formatLabel(r[yKey])))];

    const seriesData = data.map(r => ([
      xCategories.indexOf(formatLabel(r[xKey])),
      yCategories.indexOf(formatLabel(r[yKey])),
      Number(r[vKey]) || 0
    ]));

    return {
      xCategories,
      yCategories,
      series: [
        {
          name: formatLabel(config.seriesName || "Heatmap"),
          data: seriesData
        }
      ]
    };
  }

  // SINGLE SERIES
  if (!group) {
    return {
      categories: data.map(r => r[label]),
      series: [{
        name: formatLabel(config.seriesName || "Series"),
        data: data.map(r => Number(r[value]) || 0)
      }]
    };
  }

  // MULTI SERIES
  const categories = [...new Set(data.map(r => r[label]))];
  const grouped: Record<string, number[]> = {};

  data.forEach(r => {
    const g = r[group];
    if (!grouped[g]) grouped[g] = new Array(categories.length).fill(0);
    grouped[g][categories.indexOf(r[label])] = Number(r[value]) || 0;
  });

  return {
    categories,
    series: Object.keys(grouped).map(name => ({ name: formatLabel(name), data: grouped[name] }))
  };
}

export function extractRows(result: any) {
  if (Array.isArray(result)) return result;
  if (Array.isArray(result?.data)) return result.data;
  if (result && typeof result === "object") return Object.values(result);
  return [];
}
