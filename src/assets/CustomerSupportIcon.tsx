import { SVGProps } from "react"
const CustomerSupportIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={68}
    height={68}
    fill="none"
    {...props}
  >
    <g filter="url(#a)">
      <circle cx={34} cy={32} r={30} fill="#07658D" />
      <path
        fill="#fff"
        d="M42.336 16.05H25.669c-5 0-8.333 3.333-8.333 8.333v10c0 5 3.333 8.334 8.333 8.334v3.55c0 1.333 1.484 2.133 2.584 1.383l7.416-4.933h6.667c5 0 8.333-3.334 8.333-8.334v-10c0-5-3.333-8.333-8.333-8.333Zm-8.333 20.283c-.7 0-1.25-.566-1.25-1.25 0-.683.55-1.25 1.25-1.25s1.25.567 1.25 1.25c0 .684-.55 1.25-1.25 1.25Zm2.1-6.916c-.65.433-.85.716-.85 1.183v.35a1.26 1.26 0 0 1-1.25 1.25 1.26 1.26 0 0 1-1.25-1.25v-.35c0-1.933 1.416-2.883 1.95-3.25.616-.417.816-.7.816-1.133 0-.834-.683-1.517-1.516-1.517-.834 0-1.517.683-1.517 1.517a1.26 1.26 0 0 1-1.25 1.25 1.26 1.26 0 0 1-1.25-1.25c0-2.217 1.8-4.017 4.017-4.017 2.216 0 4.016 1.8 4.016 4.017 0 1.9-1.4 2.85-1.916 3.2Z"
      />
    </g>
    <defs>
      <filter
        id="a"
        width={68}
        height={68}
        x={0}
        y={0}
        colorInterpolationFilters="sRGB"
        filterUnits="userSpaceOnUse"
      >
        <feFlood floodOpacity={0} result="BackgroundImageFix" />
        <feColorMatrix
          in="SourceAlpha"
          result="hardAlpha"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
        />
        <feOffset dy={2} />
        <feGaussianBlur stdDeviation={2} />
        <feColorMatrix values="0 0 0 0 0.0784314 0 0 0 0 0.109804 0 0 0 0 0.121569 0 0 0 0.04 0" />
        <feBlend
          in2="BackgroundImageFix"
          result="effect1_dropShadow_11375_82820"
        />
        <feColorMatrix
          in="SourceAlpha"
          result="hardAlpha"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
        />
        <feOffset />
        <feGaussianBlur stdDeviation={0.5} />
        <feColorMatrix values="0 0 0 0 0.0784314 0 0 0 0 0.109804 0 0 0 0 0.121569 0 0 0 0.02 0" />
        <feBlend
          in2="effect1_dropShadow_11375_82820"
          result="effect2_dropShadow_11375_82820"
        />
        <feBlend
          in="SourceGraphic"
          in2="effect2_dropShadow_11375_82820"
          result="shape"
        />
      </filter>
    </defs>
  </svg>
)
export default CustomerSupportIcon
