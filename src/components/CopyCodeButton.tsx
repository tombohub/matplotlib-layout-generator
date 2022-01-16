import { CopyToClipboard } from "react-copy-to-clipboard";
import { generateCode } from "../scripts/generateCode";
import { calculateRowsCount } from "../scripts/calculateRowsCount";
import { useAtom } from "jotai";
import { layoutAtom, columnsCountAtom } from "../store/store";
import { useEffect, useState } from "react";

export function CopyCodeButton() {
  const [layout] = useAtom(layoutAtom);
  const [columnsCount] = useAtom(columnsCountAtom);

  /**
   * Indicates if generated code is copied to clipboard
   */
  const [isCopied, setIsCopied] = useState(false);

  useEffect(() => {
    setIsCopied(false);
  }, [layout]);
  /**
   * Set isCopied state to true indicating that the current
   * code is copied to clipboard
   */
  function toggleIsCopied() {
    setIsCopied(true);
  }
  return (
    <span style={{ float: "right" }}>
      <CopyToClipboard
        text={generateCode(calculateRowsCount(layout), columnsCount, layout)}
      >
        <button onClick={toggleIsCopied}>
          {isCopied ? "Copied" : "Copy code"}
        </button>
      </CopyToClipboard>
    </span>
  );
}
