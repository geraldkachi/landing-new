import { SVGProps } from "react"
type Props = {
  index: boolean;
} & SVGProps<SVGSVGElement>;

const HomeIcon = ({ index, ...props }: Props) => (

  <svg
    width={21}
    height={20}
    fill="none"
    {...props}
  >
    <path
      d="M19.86 6.37 12.93.83c-1.07-.86-2.8-.86-3.86-.01L2.14 6.37C1.36 6.99.86 8.3 1.03 9.28l1.33 7.96c.24 1.42 1.6 2.57 3.04 2.57h11.2c1.43 0 2.8-1.16 3.04-2.57l1.33-7.96c.16-.98-.34-2.29-1.11-2.91ZM11 13.5a2.5 2.5 0 0 1 0-5 2.5 2.5 0 0 1 0 5Z"
      fill={index ? "#065373" : "#fff"}
    />
  </svg>
)

export default HomeIcon
