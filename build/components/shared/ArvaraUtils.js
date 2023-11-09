import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
export const Checkbox = ({ id, label, innerRef, className, ...props }) => {
    return (_jsx(_Fragment, { children: _jsxs("label", { className: `chek flex items-center justify-start cursor-pointer ${className}`, htmlFor: id, children: [_jsx("input", { ...innerRef, ...props, id: id, type: "checkbox", className: "mr-2 cursor-pointer" }), _jsx("span", { className: "my-0", children: label })] }) }));
};
