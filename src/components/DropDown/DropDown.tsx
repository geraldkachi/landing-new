import "./dropdown.css"
// import { NotifyPropsObj } from '../../types'
import { ChangeEvent, MutableRefObject, RefObject, useRef } from 'react'

interface DropDownProps {
  children?: JSX.Element
  className?: string
  renderFooter?: () => JSX.Element
  renderItems?: (n: unknown , b: number) => JSX.Element
  contentData?: unknown[]
  customToggle?: () => void
  badge?: string | JSX.Element
  icon?: string
  loading?: boolean
  error?: unknown
}

const clickOutSideRef = (content_ref: RefObject<HTMLDivElement>, toggle_ref: MutableRefObject<HTMLButtonElement>) => {
  document.addEventListener("mousedown", (e:  globalThis.MouseEvent & EventTarget & ChangeEvent) => {
    // user click toggle
    if (toggle_ref.current && toggle_ref.current.contains(e.target)) {
      content_ref.current.classList.toggle('active')
    } else {
      // user click outside the toggle and content
      if (content_ref.current && !content_ref.current.contains(e.target)) {
        content_ref.current.classList.remove("active")
      }
    }
  })
}

const Dropdown = ({ icon, badge, customToggle, contentData, renderItems, renderFooter, children, className, loading, error }: DropDownProps) => {

  const dropdown_toggle_el = useRef<HTMLButtonElement>(null)
  const dropdown_content_el = useRef<HTMLDivElement>(null)

  clickOutSideRef(dropdown_content_el, dropdown_toggle_el)

  return (
    <div className={`dropdown ${className}`}>
      <button ref={dropdown_toggle_el} className="dropdown__toggle">
        <>
          {icon && <i className={icon}></i>}
          {badge && <span className="dropdown__toggle-badge">{badge}</span>}
          {customToggle && customToggle()}
          {children ? (children) : "No Data"}
        </>
      </button>
      <div ref={dropdown_content_el} className="dropdown__content">
        {loading ? 'Loading Notifications...' :
          <div className="block overflow-y-scroll">
            {(contentData && renderItems && contentData?.map((item: unknown, index: number) => renderItems(item, index)))}
          </div>
        }
        {renderFooter && <div className="dropdown__footer">
          {renderFooter()}
        </div>
        }
      </div>
    </div>
  )
}

export default Dropdown
