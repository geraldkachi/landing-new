import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import PayWithIcon from "./paywithicon.svg";
const Paywith = () => {
    return (_jsx("section", { className: "overflow-x-hidden px-5 py-10", children: _jsxs("div", { className: "grid md:grid-cols-2 gap-10 py-10 max-w-[1300px] mx-auto ", children: [_jsx("div", { className: "self-center ", children: _jsx("div", { className: "object-fill flex items-center justify-center", children: _jsx("img", { src: PayWithIcon, alt: "PayWithIcon", className: "rounded-full" }) }) }), _jsx("div", { className: "text-base text-left self-center justify-items-center py-5 text-[#141C1F]", children: _jsxs("div", { className: "", children: [_jsx("h1", { className: "font-bold text-3xl md:text-[32px]", children: "Automate Employee Data" }), _jsx("p", { className: "my-5", children: " Connect Arvo with your attendance and time-tracking systems. Employee hours and leave balances are automatically synced, eliminating manual data entry. Say goodbye to spreadsheet chaos!" })] }) })] }) }));
};
export default Paywith;
