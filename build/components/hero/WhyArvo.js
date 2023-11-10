import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { useEffect, useState } from 'react';
// import GifMoney from "./money-5944_256.gif"
import GifMoney from "./whyarvo.svg";
const WhyArvo = ({ whyavro }) => {
    const arr = [1, 2, 3];
    const [tabIndex, setTabIndex] = useState(0);
    useEffect(() => {
        const intervalId = setInterval(() => {
            // Increment the index and loop back to 0 when it reaches the end of the array
            setTabIndex((prevIndex) => (prevIndex + 1) % arr.length);
        }, 3000); // Change the interval time (in milliseconds) to adjust the loop speed
        // Clean up the interval when the component is unmounted to avoid memory leaks
        return () => clearInterval(intervalId);
    }, [arr.length]);
    return (_jsx("div", { id: 'why-avro', ref: whyavro, className: 'bg-[#F6F8F9] px-5 py-12 mb-8 sm:mb-auto', children: _jsxs("div", { className: ' max-w-7xl mx-auto mt-10 py-10', children: [_jsxs("div", { className: "my-5 text-center", children: [_jsx("h1", { className: 'text-[#141C1F] text-[40px] my-5', children: "Why Arvo Payroll?" }), _jsx("p", { children: "Efficiently make payments with Arvo Payroll" })] }), _jsxs("div", { className: "grid md:grid-cols-2 sm:gap-10 md:h-[500px] max-w-[1200px] mx-auto mb-3", children: [_jsxs("div", { className: "text-left self-center flex gap-6  flex-col my-4 ml-4 border-l-4 border-[#F1F3FF] text-[#949AB1] relative", children: [_jsx("div", { className: "flex items-center tabIndex pl-5 mb-5  my-1 hover:border-l-4 hover:border-[#02C39A] cursor-pointer hover:text-[#02C39A]" + (tabIndex === 0 && "tabIndex text-[#02C39A] border-l-4 h-20 border-b-[#02C39A]"), children: _jsxs("div", { children: [_jsx("p", { className: `font-bold text-[#141C1F] ${tabIndex === 0 && " text-[#02C39A] "}`, children: "Precision Payroll" }), _jsx("p", { className: ` ${tabIndex === 0 && " text-[#668A99] "}`, children: "Experience accurate payroll processing tailored to African business intricacies. Arvo ensures every cent is accounted for, ensuring seamless salary disbursements." })] }) }), _jsx("div", { className: "flex items-center tabIndex pl-5 mb-5  my-1 hover:border-l-4 hover:border-[#065373] cursor-pointer hover:text-[#065373]" + (tabIndex === 1 && " text-[#065373] border-l-4 border-b-[#065373]"), children: _jsxs("div", { children: [_jsx("p", { className: `font-bold text-[#141C1F] ${tabIndex === 1 && " text-[#065373 ]"}`, children: "Localized Expertise" }), _jsx("p", { className: `${tabIndex === 1 && " text-[#668A99] "}`, children: " Benefit from our in-depth understanding of African tax codes and employment regulations. We navigate the complex landscape, ensuring your company stays compliant effortlessly." })] }) }), _jsx("div", { className: "flex items-center tabIndex pl-5 mb-5  my-1 hover:border-l-4 hover:border-[#2E63EA] cursor-pointer hover:text-[#2E63EA]" + (tabIndex === 2 && " text-[#2E63EA] border-l-4 border-b-[#2E63EA]"), children: _jsxs("div", { children: [_jsx("p", { className: `font-bold text-[#141C1F] ${tabIndex === 2 && " text-[#2E63EA] "}`, children: "Time-Efficient Management" }), _jsx("p", { className: `${tabIndex === 2 && " text-[#668A99] "}`, children: "  Arvo streamlines payroll tasks, liberating your team from administrative hassles. Spend less time on paperwork and more on what truly matters \u2013 growing your business." })] }) })] }), _jsx("div", { className: "bg-contain over", children: _jsxs("div", { className: 'grid md:grid-cols-1- mt-20 sm:mt-0 h-auto', children: [tabIndex === 0 && (_jsx(_Fragment, { children: _jsx("div", { className: 'overflow-hidden h-full bg-contain p-10', children: _jsx("img", { src: GifMoney, alt: "GifMoney", className: "rounded-3xl  bg-contain self-stretch flex items-center justify-center sm:py-5  md:my-0 w-full" }) }) })), tabIndex === 1 && (_jsx(_Fragment, { children: _jsx("div", { className: 'overflow-hidden h-full bg-contain p-10', children: _jsx("img", { src: GifMoney, alt: "GifMoney", className: "rounded-3xl  bg-contain self-stretch flex items-center justify-center sm:py-5  md:my-0 w-full" }) }) })), tabIndex === 2 && (_jsx(_Fragment, { children: _jsx("div", { className: 'overflow-hidden h-full bg-contain p-10', children: _jsx("img", { src: GifMoney, alt: "GifMoney", className: "rounded-3xl object-cover   bg-contain self-stretch flex items-center justify-center sm:py-5 -my-10 md:my-0 w-full" }) }) }))] }) })] })] }) }));
};
export default WhyArvo;
