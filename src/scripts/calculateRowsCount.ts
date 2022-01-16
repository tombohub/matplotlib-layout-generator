import { Layout } from "react-grid-layout";

/**
 * WHAT: Calculates the number of rows in current layout.
 * WHY: It's needed to create matplotlib GridSpec instance
 * @returns number of rows in current layout
 */
export function calculateRowsCount(layout: Layout[]) {
    if (layout.length > 0) {
        const lastItem = layout[layout.length - 1];
        const rowsCount = lastItem.y + lastItem.h;
        return rowsCount;
    } else {
        const rowsCount = 0;
        return rowsCount;
    }
}