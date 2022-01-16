import { useAtom } from "jotai";
import { Layout } from "react-grid-layout";
import { generateCode } from "../scripts/generateCode";
import { calculateRowsCount } from "../scripts/calculateRowsCount";
import { columnsCountAtom, layoutAtom } from "../store/store";
import { Light as SyntaxHighlighter } from "react-syntax-highlighter";
import python from "react-syntax-highlighter/dist/esm/languages/hljs/python";
import { atelierCaveLight } from "react-syntax-highlighter/dist/esm/styles/hljs";
import { useEffect, useState } from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";

export function GeneratedCodeArea() {
  const [generatedCode, setGeneratedCode] = useState("");
  const [layout] = useAtom(layoutAtom);
  const [columnsCount] = useAtom(columnsCountAtom);

  SyntaxHighlighter.registerLanguage("python", python);

  return (
    <>
      <div>
        <SyntaxHighlighter language="python" style={atelierCaveLight}>
          {generateCode(calculateRowsCount(layout), columnsCount, layout)}
        </SyntaxHighlighter>
      </div>
    </>
  );
}
