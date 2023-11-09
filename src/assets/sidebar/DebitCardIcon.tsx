import { SVGProps } from "react"

type Props = {
  index: boolean;
} & SVGProps<SVGSVGElement>;

const DebitCardIcon = ({index, ...props} :Props) => (
  <svg
    width={24}
    height={26}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M22 8.55c0 .66-.54 1.2-1.2 1.2H3.2c-.66 0-1.2-.54-1.2-1.2v-.01C2 6.25 3.85 4.4 6.14 4.4h11.71C20.14 4.4 22 6.26 22 8.55ZM2 12.45v5.01c0 2.29 1.85 4.14 4.14 4.14h11.71c2.29 0 4.15-1.86 4.15-4.15v-5c0-.66-.54-1.2-1.2-1.2H3.2c-.66 0-1.2.54-1.2 1.2Zm6 5.8H6c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h2c.41 0 .75.34.75.75s-.34.75-.75.75Zm6.5 0h-4c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h4c.41 0 .75.34.75.75s-.34.75-.75.75Z"
      fill={index ?  "#065373" :  "#fff" }
    />
  </svg>
)

export default DebitCardIcon
