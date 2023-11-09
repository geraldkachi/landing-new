import * as React from "react"
import { SVGProps } from "react"

const WithdrawalIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={40}
    height={40}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <rect width={40} height={40} rx={20} fill="#E71D36" fillOpacity={0.24} />
    <g opacity={0.8} fill="#E71D36">
      <path d="M28.335 12.709H11.668a.63.63 0 0 1-.625-.625.63.63 0 0 1 .625-.625h16.667a.63.63 0 0 1 .625.625.63.63 0 0 1-.625.625Z" />
      <path d="M13.059 12.084v9.975a2.6 2.6 0 0 0 1.041 2.083l4.342 3.25c.925.692 2.2.692 3.125 0l4.342-3.25a2.6 2.6 0 0 0 1.041-2.083v-9.975H13.06Zm10.275 9.375h-6.667a.63.63 0 0 1-.625-.625.63.63 0 0 1 .625-.625h6.667a.63.63 0 0 1 .625.625.63.63 0 0 1-.625.625Zm0-4.167h-6.667a.63.63 0 0 1-.625-.625.63.63 0 0 1 .625-.625h6.667a.63.63 0 0 1 .625.625.63.63 0 0 1-.625.625Z" />
    </g>
  </svg>
)

export default WithdrawalIcon
