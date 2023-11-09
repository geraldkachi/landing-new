import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
const LoadingScreen = ({ message }) => {
    return (_jsx("div", { className: "flex items-center justify-center h-full mt-20", children: _jsx("div", { className: "m-auto", children: message && _jsxs("p", { children: [message || "Retrieving your data", " ", _jsx("span", { className: "animate-pulse", children: "..." })] }) }) }));
};
export default LoadingScreen;
