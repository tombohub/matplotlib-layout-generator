import { AddPlotInput } from "./AddPlotInput";
import { GeneratedCodeArea } from "./GeneratedCodeArea";
import { Grid } from "./Grid";
import "react-grid-layout/css/styles.css";
import { CopyCodeButton } from "./CopyCodeButton";
import { useAtom } from "jotai";
import { layoutWidthAtom } from "../store/store";

export function Main() {
  const [width] = useAtom(layoutWidthAtom);
  return (
    <>
      <div style={{ width: width, margin: "auto" }}>
        <AddPlotInput />
        <CopyCodeButton />
        <Grid />
        <GeneratedCodeArea />
      </div>
    </>
  );
}
