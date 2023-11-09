import { DetailedHTMLProps, InputHTMLAttributes, RefAttributes } from "react";

export const Checkbox = ({
    id,
    label,
    innerRef,
    className,
    ...props
  }: DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> & {
    label: string;
    innerRef?: RefAttributes<HTMLInputElement>;
  }) => {
    return (
      <>
        <label
          className={`chek flex items-center justify-start cursor-pointer ${className}`}
          htmlFor={id}>
          <input {...innerRef} {...props} id={id} type="checkbox" className="mr-2 cursor-pointer" />
          <span className="my-0">{label}</span>
        </label>
      </>
    );
  };
