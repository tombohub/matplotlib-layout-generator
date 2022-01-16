import { Layout } from "react-grid-layout";

export function generateCode(rowsCount: number, columnsCount: number, layout: Layout[]) {
    /**
   * code:
   * def generate_axes(fig):
   *   gridspec = fig.add_gridspec(nrows={rowsCount}, ncols={columnsCount})
   *   ax_${axesName} = fig.add_subplot(gridspec[${item.y}:${item.y+item.height}, ${item.x}:${item.x+item.width}])
   *   ...
   *   return {'${axesName}': ax_${axesName}, ...}
   */
    const matplotlib_code =
        `def generate_axes(fig):
    gridspec = fig.add_gridspec(nrows=${rowsCount}, ncols=${columnsCount})
    axes = {}
    ${layout.map(item => (
            `axes['${item.i}'] = fig.add_subplot(gridspec[${item.y}:${item.y + item.h}, ${item.x}:${item.x + item.w}])`
        )).join('\n    ')
        }
    return axes`
    return matplotlib_code
}