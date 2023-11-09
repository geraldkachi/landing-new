import * as React from "react"
import { SVGProps } from "react"

interface Props {
  index: boolean
}
const HomeBot = ({index}: Props) => (
  <svg
    width={25}
    height={24}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="m21.527 8.37-6.93-5.54c-1.07-.86-2.8-.86-3.86-.01l-6.93 5.55c-.78.62-1.28 1.93-1.11 2.91l1.33 7.96c.24 1.42 1.6 2.57 3.04 2.57h11.2c1.43 0 2.8-1.16 3.04-2.57l1.33-7.96c.16-.98-.34-2.29-1.11-2.91Zm-8.86 7.13a2.5 2.5 0 0 1 0-5 2.5 2.5 0 0 1 0 5Z"
      fill={index ? "#FFFFFF" : "#C2D0D6"}
    />
  </svg>
)

export default HomeBot
