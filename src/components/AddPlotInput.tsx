import React, { useState } from "react";
import { useAtom } from "jotai";
import { layoutAtom } from "../store/store";
import { Layout } from "react-grid-layout";
export function AddPlotInput() {
  const [plotName, setPlotName] = useState<string>("");
  const [layout, setLayout] = useAtom(layoutAtom);

  /**
   * It adds the new item to the grid layout on form submit
   * and resets the plot name to empty.
   * The item is added at the bottom.
   * @param e form event
   */
  function addPlotToLayout(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const newLayout: Layout[] = [
      ...layout,
      {
        i: plotName,
        // x: 0 and y: Infinity adds the item to the bottom
        x: 0,
        y: Infinity,
        w: 2,
        h: 2,
      },
    ];
    setLayout(newLayout);
    setPlotName("");
  }
  return (
    <>
      <form onSubmit={addPlotToLayout} style={{ display: "inline" }}>
        <input
          type="text"
          required={true}
          value={plotName}
          placeholder="Type subplot name..."
          onChange={e => setPlotName(e.target.value)}
        />
        <button type="submit">Add subplot</button>
      </form>
    </>
  );
}
