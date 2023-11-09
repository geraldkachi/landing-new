import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
const ErrorScreen = ({ message }) => {
    return (_jsx("div", { className: "flex items-center justify-center h-full", children: _jsx("div", { className: "m-auto", children: _jsxs("p", { className: "text-red-1", children: [message || "Oops.. Something went wrong", " ", _jsx("span", { className: "animate-ping", children: "..." })] }) }) }));
};
export default ErrorScreen;
