import { jsxs as _jsxs, jsx as _jsx } from "react/jsx-runtime";
import { useRef, useState } from "react";
function Accordion({ heading, showHeader = true, open = false, children, activeClass = "", otherClasses, }) {
    const [openAccordion, setopenAccordion] = useState(false);
    const toggleAccordion = () => {
        setopenAccordion(!openAccordion);
    };
    const ref = useRef();
    return (_jsxs("div", { className: `relative bg-transparent max-w-4xl w-full mx-auto mb-4  ${openAccordion ? activeClass : ""} ${otherClasses || ""}`, children: [showHeader && (_jsx("div", { className: `w-full px-4 ${open || openAccordion
                    ? ""
                    : "flex items-center justify-center"
                //   : "border shadow-[0px_8px_22px_rgba(151,143,175,0.08)]"
                }`, children: _jsxs("div", { onClick: toggleAccordion, className: `flex cursor-pointer items-center w-full gap-4 justify-between py-2 bg-transparent`, children: [_jsxs("span", { style: { flexGrow: 2 }, className: "font-medium text-left cinz text-[#716C81]", children: [heading, " "] }), _jsx("button", { type: "button", children: open || openAccordion ? (_jsx("svg", { width: "20", height: "20", viewBox: "0 0 20 20", fill: "none", xmlns: "http://www.w3.org/2000/svg", children: _jsx("path", { d: "M14.4108 6.91091C14.7362 6.58547 15.2639 6.58547 15.5893 6.91091C15.9147 7.23634 15.9147 7.76398 15.5893 8.08942L10.5893 13.0894C10.2738 13.4049 9.76582 13.4159 9.43694 13.1145L4.43694 8.53112C4.09767 8.22013 4.07475 7.69299 4.38575 7.35372C4.69674 7.01446 5.22388 6.99154 5.56314 7.30253L9.97498 11.3467L14.4108 6.91091Z", fill: "#0D1227" }) })) : (_jsx("svg", { width: "20", height: "20", viewBox: "0 0 20 20", fill: "none", xmlns: "http://www.w3.org/2000/svg", children: _jsx("path", { d: "M14.4108 6.91091C14.7362 6.58547 15.2639 6.58547 15.5893 6.91091C15.9147 7.23634 15.9147 7.76398 15.5893 8.08942L10.5893 13.0894C10.2738 13.4049 9.76582 13.4159 9.43694 13.1145L4.43694 8.53112C4.09767 8.22013 4.07475 7.69299 4.38575 7.35372C4.69674 7.01446 5.22388 6.99154 5.56314 7.30253L9.97498 11.3467L14.4108 6.91091Z", fill: "#0D1227" }) })) })] }) })), _jsx("div", { ref: ref, style: {
                    maxHeight: open || openAccordion ? ref.current.scrollHeight : 0,
                }, className: `relative transition-all
        } overflow-hidden transition-all duration-[0.7rem]`, children: _jsx("div", { className: "px-5", children: children }) })] }));
}
export default Accordion;
