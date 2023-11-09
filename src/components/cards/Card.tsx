import { ReactNode } from "react";

interface Props {
  title?: string;
  subTitle?: string;
  children?: JSX.Element | ReactNode;
  className?: string
}

const Card = (props: Props) => {
  const { title, children, subTitle, className } = props;
  return (
    <>
      <div className={`${className} rounded-3xl bg-white border-slate-100 drop-shadow-lg`}>
        <div className="p-8 md:p-12 my-10 rounded-lg">
          <h1 className="font-bold text-3xl mt-6">
            {title}
          </h1>
          <p className=" font-normal text-base mt-2 text-grey-slate">
            {subTitle}
          </p>
          {children}
        </div>
      </div>
    </>
  );
};

export default Card;
