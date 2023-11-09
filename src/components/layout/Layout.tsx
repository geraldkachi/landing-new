import "./layout.css"
import { useState } from "react"
import { Outlet } from "react-router-dom"

import Sidebar from "../sidebar/Sidebar"
import BottomNav from "../bottomnav/BottomNav"
import CustomerSupportIcon from "../../assets/CustomerSupportIcon"
import CustomerSupport from "./CustomerSupport"
import { ClickOutside } from "../ClickOutside/ClickOutside"

const Layout = () => {
  const [open, setOpen] = useState<boolean>(true);
  const [openCustomer, setOpenCustomer] = useState<boolean>(false);

  return (
    <>
      <section className={`layout`}>
        <Sidebar {...{ open }} {...{ setOpen }} />
        <div className={`layout__content ${open ? "sm:pl-60" : "sm:pl-20"} `}>
          <div className={`layout__content-main p-5 lg:p-10`} >
            <Outlet />
          </div>
        </div>
        <BottomNav />
      </section>

      <div onClick={() => setOpenCustomer(true)} className="fixed bottom-14 md:bottom-4 right-6 md:right-11 cursor-pointer">
        <CustomerSupportIcon />
      </div>

      <ClickOutside onclickoutside={() => setOpenCustomer(false)}>
        {openCustomer && (
          <CustomerSupport />
        )}
      </ClickOutside>

    </>
  )
}

export default Layout
