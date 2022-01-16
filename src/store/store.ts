import { atom, useAtom } from "jotai";
import { Layout } from "react-grid-layout";

/**
 * react-grid-layout layout array
 */
export const layoutAtom = atom<Layout[]>([]);

/**
 * Number of columns in grid
 */
export const columnsCountAtom = atom<number>(12);

/**
 * WHAT: Layout width in pixels.
 * WHY: it's needed to calculate the row height since we want row height 
 * same as column width
 */
export const layoutWidthAtom = atom<number>(600)

/**
 * Grid row height.
 * WHY: to make it same as column width on the website grid. 
 * Enhances user experience.
 */
export const rowHeightAtom = atom<number>(get => get(layoutWidthAtom) / get(columnsCountAtom))

/**
 * Generated python code based on grid layout state
 */
export const generatedCode = atom<string>('')