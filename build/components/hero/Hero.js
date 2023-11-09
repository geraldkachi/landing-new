import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import YellowHero from '../../assets/home/YelloHero';
// import LandingPhone from '../../images/login/nmn.svg'
import LandingPhone from '/africa.svg';
import GooglePlayHome from "./GooglePlayHome.svg";
import AppleStoreHome from "./AppleStoreHome.svg";
import { useNavigate } from 'react-router-dom';
//@ts-ignore
import { Rotate, Fade, LightSpeed } from "react-reveal";
//@ts-ignore
import Jump from "react-reveal";
const Hero = () => {
    const navigate = useNavigate();
    return (_jsxs("section", { className: "px-5 grid lg:grid-flow-col place-items-center my-10 h-[60%] mx-auto max-w-[1200px] overflow-hidden", children: [_jsxs("div", { className: 'justify-selt-center md:justify-self-start  text-start', children: [_jsx(Rotate, { top: true, left: true, children: _jsxs("h1", { className: 'text-5xl my-3', children: ["Empowering Africa's Workforce  ", '\n', _jsx("span", { className: 'block', children: "Simplifying Payroll, Elevating Businesses." })] }) }), _jsxs(Fade, { bottom: true, children: [_jsxs("p", { className: 'text-xl my-5', children: ["Arvo Payroll: Transforming Traditional Payroll  ", _jsx("br", {}), " into Seamless Efficiency, One Employee at a Time."] }), _jsx("button", { onClick: () => navigate('register'), className: "bg-black p-5 px-12 rounded-xl text-white mb-5", children: "Create Web Account" }), _jsxs("div", { className: "flex items-center md:mt-5", children: [_jsx("img", { className: 'cursor-pointer', src: GooglePlayHome, alt: "GooglePlayHome", onClick: () => window.location.href = 'https://arvofinance.page.link/download-app' }), "\u00A0 \u00A0 \u00A0 \u00A0", _jsx("img", { className: 'cursor-pointer', src: AppleStoreHome, alt: "AppleStoreHome", onClick: () => window.location.href = 'https://arvofinance.page.link/download-app' })] })] }), _jsx(LightSpeed, { left: true, children: _jsx("p", { className: "py-3 text-base", children: "Trusted by 1,500,000+ Customers" }) })] }), _jsxs("div", { className: 'relative my-10 py-3', children: [_jsx("div", { className: "absolute  p-10 -z-10 left-[10%] md:left-[75%] -top-16 overflow-hidden", children: _jsx(YellowHero, { className: '' }) }), _jsx("div", { className: "absolute  p-10 -z-10 left-[10%] md:left-[75%] -bottom-20 overflow-hidden", children: _jsx(YellowHero, { className: '' }) }), _jsx("div", { className: "absolute  p-10 -z-10 left-[10%] md:-left-72 -bottom-0 overflow-hidden", children: _jsx(YellowHero, { className: '' }) }), _jsx("div", { className: 'animated-bounce', children: _jsxs(Jump, { bottom: true, children: [_jsx("a", { href: "" }), _jsx("img", { src: LandingPhone, alt: "LandingPhone", className: 'md:h-[400px] my-10' })] }) })] })] }));
};
export default Hero;
