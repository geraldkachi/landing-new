import * as React from "react"
import { SVGProps } from "react"

const VerificationIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={40}
    height={40}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <rect width={40} height={40} rx={20} fill="#2E63EA" fillOpacity={0.24} />
    <path
      d="M20 10c-2.62 0-4.75 2.13-4.75 4.75 0 2.57 2.01 4.65 4.63 4.74.08-.01.16-.01.22 0h.07a4.738 4.738 0 0 0 4.58-4.74c0-2.62-2.13-4.75-4.75-4.75ZM25.08 22.15c-2.79-1.86-7.34-1.86-10.15 0-1.27.85-1.97 2-1.97 3.23s.7 2.37 1.96 3.21c1.4.94 3.24 1.41 5.08 1.41 1.84 0 3.68-.47 5.08-1.41 1.26-.85 1.96-1.99 1.96-3.23-.01-1.23-.7-2.37-1.96-3.21Z"
      fill="#2E63EA"
    />
  </svg>
)

export default VerificationIcon
