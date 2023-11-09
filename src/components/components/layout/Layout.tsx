import "./layout.css";
import { useState } from "react";
import Topnav from "./Topnav";
import { Outlet } from "react-router-dom";
import Sidebar from "../sidebar/Sidebar";
import BottomNav from "../bottomnav/BottomNav";


const Layout = () => {
  const [open, setOpen] = useState<boolean>(true);

  // const lastName = localStorage.getItem("lastName");
  // const firstName = localStorage.getItem("firstName");

  return (
    <div>
      {/* {open ? <ChangePasswordModal {...{ open }} {...{ close }} /> : null} */}
      <section className={` `}>
        <Sidebar {...{ open }} {...{ setOpen }} />
        <div className={`layout__content  ${open ? "sm:pl-60" : "sm:pl-20"} `}>
          <div className={`layout__content-main`}>
            <Topnav />
            <div className="px-3">
              <Outlet />
            </div>

          </div>
        </div>
        <BottomNav />
      </section>
    </div>
  );
};

export default Layout;
