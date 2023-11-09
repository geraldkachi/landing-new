import { jsxs as _jsxs, jsx as _jsx } from "react/jsx-runtime";
import { Link, useLocation } from "react-router-dom";
const BottomNav = () => {
    const location = useLocation();
    const routeList = [
        { route: "/home", title: "Home" },
        { route: "/task", title: "Task" },
        { route: "/staff", title: "Staff" },
        { route: "/history", title: "History" },
        { route: "/stand-up", title: "Stand-up" },
        // ...(isAuthorised("super-admin")
        //   ? [{ route: "/administrator", title: "Administrator" }]
        //   : []),
    ];
    return (_jsx("section", { className: "bg-[#ffffff] sm:hidden bottomnav px-3 py-2 fixed  bottom-0 w-full shadow-xl flex items-center gap-3 justify-between overflow-x-scroll rounded-tr-3xl rounded-tl-3xl border border-[#aad0d0]", children: routeList.map((item, index) => {
            const activeItem = location.pathname.includes(item?.route);
            const iconArr = [
                // <HomeIcon key={1} index={activeItem} />,
                // <TaskIcon key={2} index={activeItem} />,
                // <StandUpIcon key={4} index={activeItem} />,
                // <HistoryIcon key={3} index={activeItem} />,
                // <StandUpIcon key={5} index={activeItem} />,
                ''
            ];
            return (_jsxs(Link, { to: item.route, className: `${activeItem && "text-white rounded-2xl bg-[#2B8572] w-max whitespace-nowrap"} flex justify-evenly flex-1 gap-x-1 items-center rounded-full px-3 py-2 cursor-pointer my-3  text-base space-x-1`, children: [_jsxs("div", { className: "", children: [" ", iconArr[index]] }), _jsx("span", { className: `${!activeItem && "scale(0) hidden"}  origin-left duration-200 whitespace-nowrap`, children: item.title })] }, index));
        }) }));
};
export default BottomNav;
