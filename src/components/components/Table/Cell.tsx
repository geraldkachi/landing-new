import { cn } from "@/utils/helpers";
import { ITableProps } from "./interface";
import { viewIsAnObject } from "./utils";

export const TableCell = <TRow,>({
    col,
    rowIndex,
    isMobile,
    row,
    clickRowAction,
  }: {
    rowIndex: number;
    isMobile: boolean;
    col: ITableProps<TRow>["columns"][number];
    row: TRow;
    clickRowAction: ITableProps<TRow>["clickRowAction"];
  }) => {
    const view = col.view(row, rowIndex);
    if (isMobile && viewIsAnObject(view) && view.mobile === false) return null;
    return (
      <td
        className={cn(
          "px-6 py-5 text-left font-medium max-w-[260px] overflow-x-hidden",
          clickRowAction && "cursor-pointer"
        )}
        onClick={(e) => {
          if (
            !(
              "tagName" in e.target &&
              //@ts-expect-error tagName not defined
              ["A", "BUTTON"].includes(e.target.tagName)
            )
          ) {
            clickRowAction?.(row, rowIndex);
          }
        }}
      >
        {!viewIsAnObject(view)
          ? view
          : isMobile && view.mobile
          ? view.mobile
          : view.desktop}
      </td>
    );
  };
  