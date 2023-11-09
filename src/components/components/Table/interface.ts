import { ReactElement, ReactNode } from "react";
import { ActionOptionProps } from "../Action";

export type ICellView<TRow> = (
  row: TRow,
  index: number
) =>
  | React.ReactNode
  | {
      mobile?: React.ReactNode | false;
      desktop: React.ReactNode;
    };

type IColumn<TRow> = (
  | {
      header: string;
    }
  | { key: string; header: Exclude<ReactElement, string> }
) & {
  view: ICellView<TRow>;
  hide?: boolean | ((screen: "mobile" | "desktop") => boolean);
};

export interface ITableProps<TRow> {
  id?: string;
  bulkAction?: Array<{
    text: React.ReactNode;
    action: (ids: string[]) => void;
    type?: "info" | "warning" | "danger" | "success";
  }>;
  topSlot?: React.ReactNode;
  data?: Nullable<TRow[]> | undefined;
  loading: boolean;
  emptyMessage?: React.ReactNode;
  columns: Array<IColumn<TRow>>;
  clickRowAction?: (row: TRow, index: number) => void;
  rowActions?: (row: TRow, index: number) => Array<ActionOptionProps>;
  showActionName?: boolean;
  pagination?: {
    setPage?: (page: number) => void;
    page?: number;
    pageSize?: number;
    setPageSize?: (pageSize: number) => void;
    totalRows?: number;
    currentLength?: number;
  };
  noDivider?: boolean;
  hideTableHeader?: boolean;
  hideActionName?: boolean;
  empty?: ReactNode;
}
