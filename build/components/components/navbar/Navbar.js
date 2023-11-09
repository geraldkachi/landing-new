import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import useWindowDimensions from '../../../hooks/useWindowDimensions';
import { ClickOutside } from '../../ClickOutside/ClickOutside';
const Navbar = () => {
    const navigate = useNavigate();
    const { width } = useWindowDimensions();
    const [nav, setNav] = useState(true);
    // const [productOpen, setProductOpen] = useState(false)
    return (_jsx("div", { className: 'bg-[#001027]', children: _jsxs("div", { className: 'px-5 py-5 flex flex-wrap items-center justify-between mx-auto max-w-[1350px]', children: [_jsx("div", { className: ' md:flex items-center justify-between ', children: _jsx(Link, { to: "/", children: _jsx("h1", { className: 'text-3xl font-normal text-white' }) }) }), _jsxs("div", { className: ' items-center flex gap-1', children: [_jsxs("div", { className: 'hidden lg:flex gap-8 text-xl font-normal text-white', children: [_jsx("button", { onClick: () => navigate('/login'), className: '', children: "News" }), _jsx("button", { onClick: () => navigate('/register'), className: "bg", children: "Forms" }), _jsx("button", { onClick: () => navigate('/register'), className: "bg", children: "Login" }), _jsx("button", { onClick: () => navigate('/register'), className: "text-[#9E7F56]", children: "Sign up" })] }), _jsx("div", { onClick: () => setNav(prev => !prev), className: 'block lg:hidden text-black cursor-pointer', children: !nav ? _jsx("img", { src: '', alt: "NavIcon" }) : _jsx("img", { src: '', alt: "NavIcon" }) })] }), _jsx(ClickOutside, { onclickoutside: () => setNav(true), className: (!nav && (width <= 1024)) ? 'fixed left-0 top-0 w-full border-r border-r-gray-300 bg-[#fff] ease-in-out duration-500 shadow-lg z-50' : 'ease-in-out duration-500 fixed left-[-100%]', children: _jsxs("div", { className: 'flex flex-col justify-center items-center w-full p-6', children: [_jsx("h1", { className: 'w-full text-3xl font-bold text-[#00df9a] m-4', children: "LATC" }), _jsx("p", { className: 'p-4 cursor-pointer mb-4', onClick: () => {
                                    null;
                                    // scrollToSection(whyavro)
                                    // handleNav()
                                }, children: "Why Arvo ?" }), _jsx("p", { className: 'p-4 cursor-pointer mb-4', onClick: () => {
                                    // scrollToSection(whyavro)
                                    // handleNav()
                                }, children: "Products" }), _jsx("p", { className: 'p-4 cursor-pointer mb-4', children: _jsx(Link, { to: "", onClick: () => {
                                        // scrollToSection(faqs)
                                        // handleNav()
                                    }, children: "FAQs" }) }), _jsx("p", { className: 'p-4 cursor-pointer mb-4', children: _jsx(Link, { to: "/faqs", onClick: () => setNav(prev => !prev), children: "Blogs" }) }), _jsx("p", { className: 'p-4 cursor-pointer mb-4', onClick: () => {
                                    // scrollToSection(contact)
                                    // handleNav()
                                }, children: "Contact Us" }), _jsx("button", { onClick: () => navigate('/'), className: "p-5 px-12 text-black mb-5 rounded-2xl border-2 border-black w-full", children: "Login" }), _jsx("button", { onClick: () => navigate('/'), className: "bg-black p-5 px-12 rounded-2xl text-white mb-5 w-full", children: "Create Account" })] }) })] }) }));
};
export default Navbar;
