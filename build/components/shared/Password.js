import { jsx as _jsx } from "react/jsx-runtime";
const PasswordMe = (props) => {
    const { showPassword, setShowPassword } = props;
    return (_jsx("div", { onClick: () => setShowPassword(!showPassword), children: showPassword ? (
        // <AIeyebol className="icon solid text-blue-2" />
        '') : (
        // <AIeyeslashbol className="icon solid text-blue-2" />
        '') }));
};
export default PasswordMe;
