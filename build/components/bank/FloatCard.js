import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import "./bank.css";
const FloatCard = ({ emoji, name, bank }) => {
    return (_jsxs("div", { className: "float-card overflow-hidden", children: [_jsx("img", { src: emoji, alt: "emojh" }), _jsx("span", { children: name }), _jsx("span", { children: bank })] }));
};
export default FloatCard;
