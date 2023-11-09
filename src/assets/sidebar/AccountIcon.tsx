import { SVGProps } from "react"

type Props = {
  index: boolean;
} & SVGProps<SVGSVGElement>;

const AccountIcon = ({index, ...props}:Props) => (
  <svg
    width={24}
    height={26}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M12 3C9.38 3 7.25 5.13 7.25 7.75c0 2.57 2.01 4.65 4.63 4.74.08-.01.16-.01.22 0h.07a4.738 4.738 0 0 0 4.58-4.74C16.75 5.13 14.62 3 12 3ZM17.08 15.15c-2.79-1.86-7.34-1.86-10.15 0-1.27.85-1.97 2-1.97 3.23s.7 2.37 1.96 3.21C8.32 22.53 10.16 23 12 23c1.84 0 3.68-.47 5.08-1.41 1.26-.85 1.96-1.99 1.96-3.23-.01-1.23-.7-2.37-1.96-3.21Z"
      fill={index ?  "#065373" :  "#fff" }
    />
  </svg>
)

export default AccountIcon
