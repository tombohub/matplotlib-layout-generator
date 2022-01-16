import { AddPlotInput } from "./AddPlotInput";
import { GeneratedCodeArea } from "./GeneratedCodeArea";
import { Grid } from "./Grid";
import "react-grid-layout/css/styles.css";
import { CopyCodeButton } from "./CopyCodeButton";
import { useAtom } from "jotai";
import { layoutAtom, layoutWidthAtom } from "../store/store";
import { Menu } from "./Menu";

export function Main() {
  const [width] = useAtom(layoutWidthAtom);
  const [layout] = useAtom(layoutAtom);
  return (
    <>
      <header style={{ textAlign: "center" }}>
        <h1>Matplotlib Layout Generator</h1>
      </header>
      <div style={{ width: width, margin: "auto" }}>
        <Menu />
        <AddPlotInput />
        <CopyCodeButton />
        <Grid />
        {layout.length > 0 ? <GeneratedCodeArea /> : ""}
      </div>
    </>
  );
}
