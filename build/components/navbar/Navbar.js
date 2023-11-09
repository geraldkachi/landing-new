import { jsx as _jsx, Fragment as _Fragment } from "react/jsx-runtime";
import Logo from "../../images/logo.png";
export const Navbar = () => {
    return (_jsx(_Fragment, { children: _jsx("nav", { className: "absolute px-10 py-3 h-11 z-10", children: _jsx("div", { className: "container px-4 mx-auto flex flex-wrap items-center justify-between", children: _jsx("div", { className: "w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start", children: _jsx("img", { src: Logo }) }) }) }) }));
};
