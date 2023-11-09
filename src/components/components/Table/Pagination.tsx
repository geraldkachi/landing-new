import { useDebounce } from "react-use";
import { Paginator } from "./Paginator";
import { useSingleState } from "@/utils/hooks/useSingleState";

export const Pagination = ({
  page = 1,
  pageSize = 1,
  totalRows = 0,
  setPage,
  currentLength,
  isLoading,
}: {
  setPage?: (page: number) => void;
  page?: number;
  pageSize?: number;
  setPageSize?: (pageSize: number) => void;
  totalRows?: number;
  currentLength?: number;
  isLoading: boolean;
}) => {
  const pageStart = pageSize * (page - 1);
  const lastPage = Math.ceil(totalRows / pageSize);
  const goToPage = useSingleState(0);
  useDebounce(
    () => {
      if (goToPage.get > 0 && goToPage.get <= lastPage) setPage?.(goToPage.get);
    },
    1000,
    [goToPage.get]
  );
  return (
    <div className="flex items-center  h-[30px] mt-6  py-1 text-xs text-gm-blue-main">
      <span className="text-xs text-gray-400 mr-auto">
        <span className="font-semibold text-gray-600">
          {pageStart + 1} - {pageStart + (currentLength ?? 0)}
        </span>{" "}
        &nbsp; of {totalRows} items
      </span>
      <Paginator
        page={page}
        pageSize={pageSize}
        loading={isLoading}
        setPage={setPage}
        totalRows={totalRows}
      />
      {/* <div className="ml-auto mr-16">
        <span className="">Rows per page:</span>
        <select
          className="border-0 text-black font-medium w-12 ml-3 h-8 bg-transparent"
          value={pageSize}
          onChange={(e) => {
            setPageSize?.(+e.target.value);
          }}
        >
          {[10, 20, 25, 30, 40, 50, 100].map((size) => (
            <option key={size.toString()}>{size}</option>
          ))}
        </select>
      </div> */}

      <div className="flex items-center gap-4 ml-auto">
        <span className="text-rp-grey-3 text-xs">Go to page:</span>
        <input
          className="border focus:border-rp-blue text-center border-gray-200 h-7 p-1 w-7 rounded-sm"
          value={goToPage.get}
          onChange={(e) => {
            const v = Number(e.target.value.replace(/\D/g, ""));
            if (Number.isFinite(v)) {
              goToPage.set(Math.min(lastPage, v));
            }
          }}
        />
      </div>
    </div>
  );
};
