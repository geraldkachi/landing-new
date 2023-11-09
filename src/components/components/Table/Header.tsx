import { ChevronDownIcon } from "@heroicons/react/24/solid";
import Action from "../Action";
import { Button } from "../Button";
import { UrlSearchInput } from "../shared/UrlSearchInput";
import { cn } from "@/utils/helpers";
import { ReactNode } from "react";
import { DocumentArrowDownIcon, PaperAirplaneIcon } from "@heroicons/react/24/outline";
export type TableHeaderProps = {
  title?: ReactNode;
  showSearch?: boolean;
  searchPlaceholder?: string;
  searchQueryKey?: string;
  onSearchChange?: (value: string) => void;
  showDownload?: boolean;
  slot?: ReactNode;
  slotRight?: ReactNode;
  onDownloadCSV?: () => void;
  downloadType?: Array<"csv" | "pdf">;
};
export function TableHeader({
  title = "Filter",
  showSearch = false,
  searchPlaceholder = "Search...",
  searchQueryKey,
  onSearchChange,
  showDownload = false,
  slot,
  slotRight,
  onDownloadCSV,
  downloadType = [],
}: TableHeaderProps) {
  const showAction = (arg: "csv" | "pdf") => {
    return downloadType.includes(arg) || downloadType.length === 0;
  };
  return (
    <header className="py-5 px-4 flex items-center">
      <h6 className="text-rp-black font-semibold mr-6">{title}</h6>
      {showSearch && (
        <UrlSearchInput
          placeholder={searchPlaceholder}
          queryKey={searchQueryKey}
          onChange={onSearchChange}
        />
      )}
      <div className="flex-1 flex items-center gap-[14px] px-[14px]">
        {slot}
      </div>
      <div className="flex gap-x-3">
        {showDownload && (
          <Action
            Component={(opened) => (
              <Button
                iconPosition="right"
                variant="secondary"
                className="rounded-[10px]"
                icon={
                  <ChevronDownIcon
                    className={cn(
                      "transition-transform",
                      opened && "rotate-180"
                    )}
                  />
                }
              >
                Download
              </Button>
            )}
            options={[
              {
                name: "Send CSV via email",
                icon: <PaperAirplaneIcon />,
                action: () => {},
                hide: !showAction("csv"),
              },
              {
                name: "Download CSV",
                icon: <DocumentArrowDownIcon />,
                action: () => onDownloadCSV?.(),
                hide: !showAction("csv"),
              },
              {
                name: "Download as PDF",
                icon: <DocumentArrowDownIcon />,
                action: () => {},
                hide: !showAction("pdf"),
              },
            ]}
          />
        )}
        {slotRight && (
          <div className="flex items-center gap-[14px]">{slotRight}</div>
        )}
      </div>
    </header>
  );
}
