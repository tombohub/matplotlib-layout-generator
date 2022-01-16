import { useAtom } from "jotai";
import { generateCode } from "../scripts/generateCode";
import { calculateRowsCount } from "../scripts/calculateRowsCount";
import { columnsCountAtom, layoutAtom } from "../store/store";
import { Light as SyntaxHighlighter } from "react-syntax-highlighter";
import python from "react-syntax-highlighter/dist/esm/languages/hljs/python";
import * as t from "react-syntax-highlighter/dist/esm/styles/hljs";

export function GeneratedCodeArea() {
  const [layout] = useAtom(layoutAtom);
  const [columnsCount] = useAtom(columnsCountAtom);

  SyntaxHighlighter.registerLanguage("python", python);

  return (
    <>
      <div>
        <SyntaxHighlighter language="python" style={t.xcode}>
          {generateCode(calculateRowsCount(layout), columnsCount, layout)}
        </SyntaxHighlighter>
      </div>
    </>
  );
}
