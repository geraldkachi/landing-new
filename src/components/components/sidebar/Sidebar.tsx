import "./sidebar.css";
// import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
// import { AdminIcon, CustomersIcon, DashboardIcon, LoanCalculatorIcon, PersonalBankingIcon, ReportsIcon, StatusIcon } from "../../assets";
// import Accordion from "../Accordion/Accordion";
import { Dispatch, SetStateAction, useCallback } from "react";

// import { DashboardIcon, EmployeesIcon, HiringIcon, MyTeamIcon } from "../../../assets";
import { Accordion } from "..";
import useWindowDimensions from "../../../hooks/useWindowDimensions";
interface SidebarProps {
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
}
const Sidebar = ({ open, setOpen }: SidebarProps) => {
  const location = useLocation()
  const { width } = useWindowDimensions()
  const navigate = useNavigate();

  const logout = useCallback(() => {
    navigate("/");
    // Cookies.remove('Authenticated')
    // Cookies.remove('secret')
    localStorage.clear()
  }, [])


  // const routeList = [
  //   { route: "/dashboard", title: "Dashboard" },
  //   { route: "/customers", title: "Customers" },
  //   { route: "/personal-banking", title: "Personal Banking" },
  //   { route: "/history", title: "Status" },
  //   { route: "/stand-up", title: "Reports" },
  //   { route: "/report", title: "Loan Calculator" },
  //   { route: "/stand-up", title: "Admin" },
  //   // ...(isAuthorised("super-admin")
  //   //   ? [{ route: "/administrator", title: "Administrator" }]
  //   //   : []),
  // ];

  const faqArr = [
    {
      header: "Government?",
      content: `content for clients.`,
      route: "/Finance",
      title: "Finance",
    },
    {
      header: "What offer?",
      content: `content for clients..`,
      route: "/Self Service",
      title: "Self Service",
    },
  ];

  const routeList = [
    { route: "/dashboard", title: "Dashboard" },
    { route: "/employees", title: "Employees" },
    { route: "/my-team", title: "My Team" },
    { route: "/hiring", title: "Hiring" },
    { route: "/time-management", title: "Time Management" },
    { route: "/Leave Management", title: "Leave Management" },
    { route: "/Training", title: "Training" },
    { route: "/Documents", title: "Documents" },
    { route: "/Performance", title: "Performance" },
    { route: "/Reports & Analytics", title: "Reports & Analytics" },
    { route: "/Finance", title: "Finance" },
    { route: "/Self Service", title: "Self Service" },
    { route: "/Performance", title: "Performance" },
  ];

  return (
    <section className={`sidebar hidden sm:block bg-white overflow-y-scroll`}>
      <div
        className={` ${open ? "sm:w-60" : "w-max"} overflow-y-scroll flex flex-col justify- transition-all ease-in-out text-white  h- relative duration-300`}
      >
        <div className="px-2 py-5">
          <div className={`${open ? "justify-between" : 'justify-center'} flex items-center`}>
            <img src="/logo.svg" alt="" className={`${!open && 'hidden'}`} />

            <img src="/arrowbreak.svg" onClick={() => setOpen(!open)} alt="arrow" className="cursor-pointer" />
          </div>
        </div>

        <div className={` px-2 pt-2 ${open && " px-2"}`}>
          <div
            className={`${open && "flex items-center justify-center"
              } inline-flex items-center pb-3 gap-4`}
          >
            {/* <MenuIcon onClick={() => setOpen(!open)} className={`ml-4 cursor-pointer duration-500 ${open && "rotate-[360deg]"}`} />
                        <HomeLogoIcon className={`${!open && "scale-0 hidden"}`} /> */}
            {/* <p className="hidden sm:block text-[#BFBFBF] mx-2 lg:block text-xs md:text-lg">MAIN MENU</p> */}
          </div>
          {routeList.map((item, index) => {
            const activeItem = location.pathname.includes(item.route);
            const iconArr = [
              ''
              // <DashboardIcon key={1} index={activeItem} />,
              // <EmployeesIcon key={2} index={activeItem} />,
              // <MyTeamIcon key={3} index={activeItem} />,
              // <HiringIcon key={4} index={activeItem} />,
              // // <AccountIcon key={5} index={activeItem} />,
            ];
            return (
              <Link
                to={item.route}
                key={index}
                className={`${activeItem && "bg-[#1D8EE6] rounded-xl !text-[#fff]"
                  }
                  ${!open && 'px-2 text-center flex items-center justify-center'}
                  flex items-center gap-2 rounded-xl px-6 py-3 cursor-pointer mb-1 text-sm
                  !text-[#535768] w-full`}
              >
                <div key={index}> {iconArr[index]}</div>

                <span
                  className={`${!open && "hidden"} ${width < 1200 ? "" : ""
                    } origin-left duration-200`}
                >
                  {item.title}
                </span>
              </Link>
            );
          })}
        </div>

        <div className="flex flex-col items-center justify-center text-black">
          {faqArr.map((item, index) => {
            const activeItem = location.pathname.includes(item?.route);

            const iconArr = [
              // <DashboardIcon key={1} index={activeItem} />,
              // <DashboardIcon key={2} index={activeItem} />,
              <img src="/finance.svg" alt="" />,
              <img src="/self-service.svg" alt="" />
            ];
            return (
              <>
                <Accordion key={`faq_${index}`} heading={
                  <Link
                    to={item.route}
                    key={index}

                    className={`${activeItem && "bg-[#] rounded-[4px]"} ${activeItem ? "text-[#716C81]" : "text-[#716C81]"
                      } flex items-center cursor-pointer text-base gap-4`}
                  // className="flex items-center gap-4 js"
                  >
                    <span>{iconArr[index]}</span>
                    <h1 className={`${!open && "hidden"} "font-semibold my-1 text-base text-[#]"`}>{item?.title}</h1>
                  </Link>
                }>
                  <p className={` "py-5 text-[#]"`}>{item?.content}</p>
                </Accordion>
              </>
            )
          })}

          {/* <p className="hidden sm:block text-[#BFBFBF] mx-2 hidden lg:block text-xs md:text-lg">ACCOUNT</p> */}
          <div className="flex items-center justify-center !text-[#535768] my-4 cursor-pointer" onClick={logout}>
              <img src="/signnout.svg" alt="singout" />
              <div className={`${!open && "hidden"} text-sm`}> Logout</div>
          </div>
        </div>


      </div>
    </section>
  );
};
export default Sidebar;
