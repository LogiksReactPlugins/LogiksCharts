
import GraphRenderer from "./GraphRenderer.js";
import type { GraphProps } from "./Grpah.types.js";

export default function Graph({ config, methods, sqlOpsConfig }: GraphProps) {
  const height = config.config?.height ?? 250;
  return (
    <div style={{ height, width: "100%" }}>
      <GraphRenderer graph_config={config} methods={methods || {}} sqlOpsUrls={sqlOpsConfig} />
    </div>

  );
}
