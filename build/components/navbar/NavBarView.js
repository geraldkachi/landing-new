import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { useState, } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import ArvoIcon from '../../images/svg/ArvoIcon';
import NavIcon from "./navicons.svg";
import { ClickOutside } from '../ClickOutside/ClickOutside';
import useWindowDimensions from '../../hooks/useWindowDimensions';
const Navbar = ({ whyavro, scrollToSection, contact, nav, setNav }) => {
    const [productOpen, setProductOpen] = useState(false);
    const navigate = useNavigate();
    const { width } = useWindowDimensions();
    const handleNav = () => {
        setNav(prev => !prev);
    };
    return (_jsx("div", { ref: whyavro, className: '', children: _jsxs("div", { className: 'px-5 pt-5 flex flex-wrap items-center justify-between mx-auto max-w-[1350px]', children: [_jsxs("div", { className: ' md:flex items-center justify-between ', children: [_jsx(Link, { to: "/", children: _jsx("h1", { className: 'text-3xl font-bold mr-4', children: _jsx(ArvoIcon, {}) }) }), _jsxs("div", { className: ' items-center hidelogin lg:flex', children: [_jsx(Link, { to: "/", onClick: () => scrollToSection(whyavro), className: 'px-4 text-sm flex cursor-pointer', children: "Why Arvo Payroll" }), _jsx("div", { children: _jsx(ClickOutside, { onclickoutside: () => setProductOpen(false), className: ` text-black`, children: productOpen && _jsx(_Fragment, { children: _jsxs("div", { className: "fdropdown__content absolute  bg-white shadow-xl m-4 p-2 z-50", children: [_jsx("div", { className: "cursor-pointer flex items-center gap-2 p-4 text-sm hover:bg-[#F0FAFE] rounded-lg w-full", children: "Wallet (Coming Soon)" }), _jsx("div", { onClick: () => navigate('/fast-cash'), className: "cursor-pointer flex items-center gap-2 p-4 text-sm hover:bg-[#F0FAFE] rounded-lg w-full", children: "Fastcast" }), _jsx("div", { onClick: () => navigate('/fedpay'), className: "cursor-pointer flex items-center gap-2 p-4 text-sm hover:bg-[#F0FAFE] rounded-lg w-full", children: "Fedpay" })] }) }) }) }), _jsx(Link, { to: "", onClick: () => scrollToSection(contact), className: 'cursor-pointer px-4 text-sm flex', children: "Contact Us" })] })] }), _jsxs("div", { className: ' items-center flex gap-1', children: [_jsx("div", { className: 'hidelogin lg:flex gap-4 text-base font-bold', children: _jsx("button", { onClick: () => window.location.href = `https://dashboard.arvopayroll.com/`, className: "bg-[#065373] p-3 px-12 rounded-xl text-white", children: "Sign In" }) }), _jsx("div", { onClick: handleNav, className: 'block lg:hidden text-black cursor-pointer', children: !nav ? _jsx("img", { src: NavIcon, alt: "NavIcon" }) : _jsx("img", { src: NavIcon, alt: "NavIcon" }) })] }), _jsx(ClickOutside, { onclickoutside: () => setNav(true), className: (!nav && (width <= 1024)) ? 'fixed left-0 top-0 w-full border-r border-r-gray-300 bg-[#fff] ease-in-out duration-500 shadow-lg z-50' : 'ease-in-out duration-500 fixed top-[-100%]', children: _jsxs("div", { className: 'flex flex-col justify-center items-center w-full p-6', children: [_jsx("h1", { className: 'w-full text-3xl font-bold text-[#00df9a] m-4', children: _jsx(ArvoIcon, {}) }), _jsx("p", { className: 'p-4 cursor-pointer mb-4', onClick: () => {
                                    scrollToSection(whyavro);
                                    handleNav();
                                }, children: "Why Arvo Payroll" }), _jsx("p", { className: 'p-4 cursor-pointer mb-4', onClick: () => {
                                    scrollToSection(contact);
                                    handleNav();
                                }, children: "Contact Us" }), _jsx("button", { onClick: () => window.location.href = `https://dashboard.arvopayroll.com/`, className: "p-5 px-12 text-[#065373] mb-5 rounded-2xl border-2 border-[#065373] w-full", children: "Sign In" })] }) })] }) }));
};
export default Navbar;
