import { SVGProps } from "react"

type Props = {
  index: boolean;
} & SVGProps<SVGSVGElement>;

const TransactionsIcon = ({index, ...props}: Props) => (
  <svg
    width={24}
    height={26}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M15.49 21.76c-.19 0-.38-.07-.53-.22a.754.754 0 0 1 0-1.06l5.01-5.01c.29-.29.77-.29 1.06 0 .29.29.29.77 0 1.06l-5.01 5.01c-.15.14-.34.22-.53.22Z"
         fill={index ?  "#065373" :  "#fff" }
    />
    <path
      d="M20.5 16.74h-17c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h17c.41 0 .75.34.75.75s-.34.75-.75.75ZM3.501 10.76c-.19 0-.38-.07-.53-.22a.754.754 0 0 1 0-1.06l5.01-5.01c.29-.29.77-.29 1.06 0 .29.29.29.77 0 1.06l-5.01 5.01c-.14.14-.34.22-.53.22Z"
         fill={index ?  "#065373" :  "#fff" }
    />
    <path
      d="M20.5 10.76h-17c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h17c.41 0 .75.34.75.75s-.34.75-.75.75Z"
         fill={index ?  "#065373" :  "#fff" }
    />
  </svg>
)

export default TransactionsIcon
