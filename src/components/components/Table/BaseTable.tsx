import { cn } from "@/utils/helpers";
import type { ITableProps } from "./interface";
import { TableCell } from "./Cell";
import { TableEmptyView } from "./EmptyView";
import Action from "../Action";
import { useIsMobile, viewIsAnObject } from "./utils";

export function BaseTable<TRow extends {}>({
  columns,
  ...props
}: ITableProps<TRow>) {
  const { isMobile } = useIsMobile();
  const data = Array.isArray(props.data) ? props.data : [];

  return (
    <section className="page-scroll relative">
      <table className="table table-auto w-full border-collapse text-rp-grey-3">
        <thead
          className={cn(
            "sticky top-0 z-[2]",
            props.hideTableHeader && "hidden"
          )}
        >
          <tr className="">
            {columns
              .filter((col) => columnFilter(isMobile, col))
              .map((col) => {
                const view = data[0] && col.view(data[0], 0);

                if (
                  isMobile &&
                  viewIsAnObject(view) &&
                  view &&
                  view?.mobile === false
                )
                  return null;

                const key = "key" in col ? col.key : col.header.toString();
                return (
                  <th
                    key={`${key}-head`}
                    className={cn(
                      "text-rp-grey-3 text-xs whitespace-nowrap font-normal text-left ",
                      "px-5 py-5  bg-rp-grey-5  max-w-sm"
                    )}
                  >
                    <span>{col.header}</span>
                  </th>
                );
              })}
            {props.rowActions && props.rowActions({} as any, 0).length > 0 && (
              <th
                className="text-rp-grey-3 text-xs font-normal text-right px-6 py-3 whitespace-nowrap
                  bg-rp-grey-5 max-w-sm"
              >
                {props.hideActionName ? "" : "Action"}
              </th>
            )}
          </tr>
        </thead>
        <tbody className="px-4 mt-5 text-rp-grey-3/80 ">
          {data.length < 1 && !props.loading && (
            <tr className=" text-base">
              <td colSpan={columns.length + 1} className="py-40">
                <div className="w-full grid place-content-center">
                  {props.empty ?? (
                    <TableEmptyView
                      title="Nothing to see yet"
                      text="Records will be listed here"
                    />
                  )}
                </div>
              </td>
            </tr>
          )}
          {data.map((row, rowIndex) => (
            <tr
              key={`row-${rowIndex}`}
              className={cn(
                "px-5",
                "text-sm",
                props.noDivider
                  ? ""
                  : "border-b last:border-b-0 border-pearl-3",
                "bg-white",
                props.clickRowAction && "hover:bg-rp-blue/10 cursor-pointer"
              )}
            >
              {columns
                .filter((col) => columnFilter(isMobile, col))
                .map((col, colIndex) => (
                  <TableCell
                    key={`row-${rowIndex} + col-${colIndex}`}
                    {...{
                      col,
                      row,
                      rowIndex,
                      isMobile: isMobile,
                      clickRowAction: props.clickRowAction,
                    }}
                  />
                ))}
              {props.rowActions &&
                props.rowActions({} as any, 0).length > 0 && (
                  <td className="px-2">
                    <div className="flex justify-end pr-6 pl-5">
                      <Action
                        variant="horizontal"
                        options={props.rowActions(row, rowIndex)}
                      />
                    </div>
                  </td>
                )}
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
}

const columnFilter = <T extends {}>(
  isMobile: boolean,
  col: ITableProps<T>["columns"][number]
) => {
  if (typeof col.hide === "function") {
    return col.hide(isMobile ? "mobile" : "desktop") ? false : true;
  }
  return col.hide ? false : true;
};
