import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import YellowHero from '../../assets/home/YelloHero';
// import LandingPhone from '../../images/login/nmn.svg'
import LandingPhone from '/africa.svg';
// import GooglePlayHome from "./GooglePlayHome.svg"
// import AppleStoreHome from "./AppleStoreHome.svg"
//@ts-ignore
import { Rotate, Fade } from "react-reveal";
//@ts-ignore
import Jump from "react-reveal";
const Hero = ({ scrollToSection, contact }) => {
    return (_jsxs("section", { className: "px-5 grid lg:grid-flow-col place-items-center my-10 h-[60%] mx-auto max-w-[1200px] overflow-hidden", children: [_jsxs("div", { className: 'justify-selt-center md:justify-self-start  text-start', children: [_jsx(Rotate, { top: true, left: true, children: _jsxs("h1", { className: 'text-5xl my-3 md:leading-[1.3]', children: ["Empowering Africa's Workforce  ", '\n', _jsx("span", { className: 'block', children: "Simplifying Payroll, Elevating Businesses." })] }) }), _jsxs(Fade, { bottom: true, children: [_jsxs("p", { className: 'text-xl my-5', children: ["Transforming Traditional Payroll  ", _jsx("br", {}), " into Seamless Efficiency."] }), _jsx("button", { onClick: () => scrollToSection(contact), className: "bg-[#065373] p-5 px-12 rounded-xl text-white mb-5", children: "Contact Us" })] })] }), _jsxs("div", { className: 'relative my-10 py-3', children: [_jsx("div", { className: "absolute  p-10 -z-10 left-[10%] md:left-[75%] -top-16 overflow-hidden", children: _jsx(YellowHero, { className: '' }) }), _jsx("div", { className: "absolute  p-10 -z-10 left-[10%] md:left-[75%] -bottom-20 overflow-hidden", children: _jsx(YellowHero, { className: '' }) }), _jsx("div", { className: "absolute  p-10 -z-10 left-[10%] md:-left-72 -bottom-0 overflow-hidden", children: _jsx(YellowHero, { className: '' }) }), _jsx("div", { className: 'animated-bounce', children: _jsxs(Jump, { bottom: true, children: [_jsx("a", { href: "" }), _jsx("img", { src: LandingPhone, alt: "LandingPhone", className: 'md:h-[400px] my-10' })] }) })] })] }));
};
export default Hero;
