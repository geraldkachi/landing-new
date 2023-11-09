import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
const Card = (props) => {
    const { title, children, subTitle, className } = props;
    return (_jsx(_Fragment, { children: _jsx("div", { className: `${className} rounded-3xl bg-white border-slate-100 drop-shadow-lg`, children: _jsxs("div", { className: "p-8 md:p-12 my-10 rounded-lg", children: [_jsx("h1", { className: "font-bold text-3xl mt-6", children: title }), _jsx("p", { className: " font-normal text-base mt-2 text-grey-slate", children: subTitle }), children] }) }) }));
};
export default Card;
