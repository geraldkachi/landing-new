import { SVGProps } from "react"

type Props = {
  index: boolean;
} & SVGProps<SVGSVGElement>;

const MoreBot = ({index, ...props}: Props) => (
  <svg
    width={25}
    height={24}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M21.836 10.9V4.1c0-1.5-.64-2.1-2.23-2.1h-4.04c-1.59 0-2.23.6-2.23 2.1v6.8c0 1.5.64 2.1 2.23 2.1h4.04c1.59 0 2.23-.6 2.23-2.1ZM11.336 13.1v6.8c0 1.5-.64 2.1-2.23 2.1h-4.04c-1.59 0-2.23-.6-2.23-2.1v-6.8c0-1.5.64-2.1 2.23-2.1h4.04c1.59 0 2.23.6 2.23 2.1ZM21.836 19.9v-2.8c0-1.5-.64-2.1-2.23-2.1h-4.04c-1.59 0-2.23.6-2.23 2.1v2.8c0 1.5.64 2.1 2.23 2.1h4.04c1.59 0 2.23-.6 2.23-2.1ZM11.336 6.9V4.1c0-1.5-.64-2.1-2.23-2.1h-4.04c-1.59 0-2.23.6-2.23 2.1v2.8c0 1.5.64 2.1 2.23 2.1h4.04c1.59 0 2.23-.6 2.23-2.1Z"
    //   fill="#C2D0D6"
    fill={index ? "#FFFFFF" : "#C2D0D6"}
    />
  </svg>
)

export default MoreBot
