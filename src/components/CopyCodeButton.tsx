import { CopyToClipboard } from "react-copy-to-clipboard";
import { generateCode } from "../scripts/generateCode";
import { calculateRowsCount } from "../scripts/calculateRowsCount";
import { useAtom } from "jotai";
import { layoutAtom, columnsCountAtom } from "../store/store";

export function CopyCodeButton() {
  const [layout] = useAtom(layoutAtom);
  const [columnsCount] = useAtom(columnsCountAtom);

  return (
    <span style={{ float: "right" }}>
      <CopyToClipboard
        text={generateCode(calculateRowsCount(layout), columnsCount, layout)}
      >
        <button>Copy code</button>
      </CopyToClipboard>
    </span>
  );
}
