import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import BankIconSvg from "./bankicon.svg";
const Bank = ({ product }) => {
    return (_jsx("div", { ref: product, className: "overflow-x-hidden px-5 py-10", children: _jsxs("div", { className: "grid md:grid-cols-2 gap-10 py-10 max-w-[1300px] mx-auto", children: [_jsxs("div", { className: "text-base text-left self-center justify-items-center py-5", children: [_jsx("h1", { className: "text-[#065373] font-bold text-4xl md:text-[56px] md:pb-5 leading", children: "Customized Payroll " }), _jsx("p", { className: "my-5", children: "Tailor your payroll structure to match your company policies. Define allowances, deductions, and benefits with ease. Aggro accommodates a variety of payment frequencies, ensuring flexibility for your unique requirements.                    " })] }), _jsx("div", { className: "self-center justify-items-center", children: _jsx(_Fragment, { children: _jsx("img", { src: BankIconSvg, alt: "" }) }) })] }) }));
};
export default Bank;
