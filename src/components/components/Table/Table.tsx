import { BaseTable } from "./BaseTable";
import { Pagination } from "./Pagination";
import { TableHeader, TableHeaderProps } from "./Header";
import { ITableProps } from "./interface";
import Loader from "../Loader";

export function Table<TRow extends {}>({
  header,
  ...props
}: ITableProps<TRow> & {
  header?: TableHeaderProps;
}) {
  return (
    <section className="page relative">
      <section className="page border rounded border-[#F1F1F1]">
        {header && <TableHeader {...header} />}
        <section className="page relative">
          {props.loading && (
            <div className="absolute top-0 w-full  z-10 text-center">
              <Loader type="bar" />
            </div>
          )}
          <BaseTable {...props} />
        </section>
      </section>

      {props.pagination && (
        <Pagination {...props.pagination} isLoading={props.loading} />
      )}
    </section>
  );
}
