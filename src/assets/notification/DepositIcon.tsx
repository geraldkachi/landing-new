import { SVGProps } from "react"

const DepositIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={40}
    height={40}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <rect width={40} height={40} rx={20} fill="#02C39A" fillOpacity={0.24} />
    <path
      d="m23.452 12.467-7.525 2.5c-5.059 1.692-5.059 4.45 0 6.133l2.233.742.742 2.234c1.683 5.058 4.45 5.058 6.133 0l2.508-7.517c1.117-3.375-.716-5.217-4.091-4.092Zm.266 4.484-3.166 3.183a.618.618 0 0 1-.442.183.618.618 0 0 1-.442-.183.629.629 0 0 1 0-.884l3.167-3.183a.629.629 0 0 1 .883 0 .629.629 0 0 1 0 .884Z"
      fill="#02C39A"
    />
  </svg>
)

export default DepositIcon
