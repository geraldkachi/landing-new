import { imageProp } from "@/utils/helpers";
import { ReactNode } from "react";
import { Button } from "../Button";

export const TableEmptyView = ({
  icon = "/images/table-empty.svg",
  ...props
}: {
  title: string;
  text: ReactNode;
  icon?: string;
  buttonText?: string;
  action?: () => void;
}) => {
  return (
    <div className="page justify-center items-center text-center">
      <img className="w-[70px]" {...imageProp(icon)} />
      <h5 className="font-semibold text-lg mt-5">{props.title}</h5>
      <p className="max-w-[280px] text-sm text-rp-grey-disabled mt-3 mb-4">
        {props.text}
      </p>
      {props.action && props.buttonText && (
        <Button
          onClick={props.action}
          className="font-semibold min-w-[216px] justify-center"
          buttonHeight="h-12"
        >
          {props.buttonText}
        </Button>
      )}
    </div>
  );
};
