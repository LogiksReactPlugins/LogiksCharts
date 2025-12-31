
import GraphRenderer from "./GraphRenderer.js";
import type { GraphProps } from "./Grpah.types.js";

export default function Graph({ config, methods, sqlOpsConfig }: GraphProps) {

  return (
    <div className="h-[350px] w-full">
      <GraphRenderer graph_config={config} methods={methods || {}} sqlOpsUrls={sqlOpsConfig} />
    </div>

  );
}
