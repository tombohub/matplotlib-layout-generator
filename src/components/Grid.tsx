import { useAtom } from "jotai";
import { useState } from "react";
import GridLayout, { Layout } from "react-grid-layout";
import { layoutAtom, layoutWidthAtom, rowHeightAtom } from "../store/store";
import "./Grid.css";

export function Grid() {
  const [layout, setLayout] = useAtom(layoutAtom);
  const [layoutWidth] = useAtom(layoutWidthAtom);
  const [rowHeight] = useAtom(rowHeightAtom);

  /**
   * Remove axes from the layout
   * @param axesName name of the plot axes
   */
  function removeAxes(axesName: string) {
    const newLayout = layout.filter(item => item.i !== axesName);
    setLayout(newLayout);
  }

  return (
    <>
      <GridLayout
        layout={layout}
        // TODO: fix the width to be the same as div container
        width={layoutWidth}
        rowHeight={rowHeight}
        margin={[2, 2]}
        className="grid"
        style={{ width: layoutWidth }}
        onLayoutChange={layout => setLayout(layout)}
      >
        {layout.map(item => (
          <div key={item.i} className="item">
            <span>{item.i}</span>
            <span
              className="closing-tag"
              onClick={() => {
                removeAxes(item.i);
              }}
            >
              X
            </span>
          </div>
        ))}
      </GridLayout>
    </>
  );
}
