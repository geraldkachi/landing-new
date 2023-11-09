import dayjs from "dayjs";

export const TableDate = ({
  date,
  hideTime = false,
  dateFormat = "ddd, MMM DD, YYYY",
  timeFormat = "hh:mmA",
}: {
  date: string;
  hideTime?: boolean;
  dateFormat?: string;
  timeFormat?: string;
}) => {
  return (
    <span className="text-sm font-normal">
      <span className="text-rp-grey-3">
        {dayjs(date).format(dateFormat)}
      </span>
      {!hideTime && (
        <>
          <br />
          <span className="text-rp-grey-disabled">
            {dayjs(date).format(timeFormat)}
          </span>
        </>
      )}
    </span>
  );
};
