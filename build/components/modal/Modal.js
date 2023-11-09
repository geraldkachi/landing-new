import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
const Modal = (props) => {
    const { type, icon, show, title, children, subTitle, closeModal } = props;
    return (_jsx(_Fragment, { children: show && (_jsxs(_Fragment, { children: [_jsx("div", { className: "justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none", children: _jsx("div", { className: "relative my-6 mx-auto", children: _jsxs("div", { className: "border-0 rounded-3xl shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none", children: [_jsx("div", { onClick: () => closeModal(false) }), type === "icon" && (_jsx("div", { className: "flex items-center justify-center m-auto mt-10  rounded-full", children: icon })), _jsxs("div", { className: "mx-auto p-5", children: [_jsx("h5", { className: "text-3xl text-700 mt-5 text-center w-80", children: title }), _jsx("p", { className: "text-center container mt-2 text-grey-slate text-base w-80", children: subTitle })] }), children] }) }) }), _jsx("div", { className: "opacity-25 fixed inset-0 z-40 bg-black" })] })) }));
};
export default Modal;
