import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Button, Input } from "../components/components";
const GetUpdates = () => {
    return (_jsx("div", { children: _jsx("section", { className: "px-5 py-10 md:py-28", children: _jsxs("div", { className: " max-w-[1200px] mx-auto rounded-3xl bg-[#F0F3F5]  py-10", children: [_jsxs("div", { className: "text-center my-5 text-[#141C1F]", children: [_jsx("p", { className: "my-4 text-sm md:text-base", children: "Don\u2019t get left behind" }), _jsx("p", { className: "text-lg md:text-4xl font-semibold", children: "Get updates on our products & services" })] }), _jsx("form", { action: "", className: 'flex justify-center items-center"', children: _jsxs("div", { className: "flex-wrap flex justify-center items-center gap-2", children: [_jsx("div", { className: "mb-6 md:mb-0", children: _jsx(Input, { type: "email", className: "\n                                    text-[#668A99]\n                                    block\n                                    w-full\n                                    px-1\n                                    sm:mx-5\n                                    border-transparent\n                                    text-sm\n                                    rounded-lg\n                                    font-normal\n                                    transition\n                                    ease-in-out\n                                    mx-3\n                                    ", placeholder: "Enter your email address" }) }), _jsx("div", { className: "md:mr-auto mb-6 md:mb-0 ml-2 md:ml-4", children: _jsx(Button, { type: "submit", className: "!bg-[#065373] inline-block rounded-lg !px-6 !py-3 border-2 border-white text-white font-medium text-xs leading-tight uppercase hover:bg-[#065373] hover:bg-opacity-1 focus:outline-none focus:ring-0 transition duration-150 ease-in-out", title: "Submit" }) })] }) })] }) }) }));
};
{
    /* routes outside the sidebar or dashboard here */
}
export default GetUpdates;
