import { Fragment as _Fragment, jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
export default function Input(props) {
    const { id, label, tooltip, disabled, readOnly, helptext, 
    // innerRef,
    className, LeadingIcon, TrailingIcon, inputClassName, inputType = 'default' } = props;
    const col = () => {
        let color = 'grey-beau';
        if (inputType === 'success') {
            color = 'meador';
        }
        else if (inputType === 'warning') {
            color = 'yellow';
        }
        else if (inputType === 'error') {
            color = 'orange';
        }
        return color;
    };
    return (_jsxs("div", { className: `bg- ${className}`, children: [label && (_jsxs("label", { className: "my-1 text-[#0D1227] leading-[19.6px] flex items-center text-left text-sm font-semibold", htmlFor: id, children: [label, tooltip && (_jsx(_Fragment, {}))] })), _jsxs("div", { className: `bg-white flex items-center w-full rounded-[4px] overflow-hidden border border-[#E2E4E8] focus-within:border-bluetiful disabled:bg-grey read-only:bg-grey ${inputClassName}
                border-${col()}
                ${(disabled || readOnly) && 'bg-grey border-none'}`, children: [LeadingIcon && (_jsx("span", { className: "mx-2", children: _jsx(LeadingIcon, {}) })), _jsx("input", { ...props, 
                        // className={`text-base p-2 flex-grow min-w-64 focus:outline-none focus:ring focus:border-blue-100`}
                        className: "w-full border border-[#E2E4E8] p-[8px] rounded-[4px] focus:outline-[#3699FF] placeholder:text-base" }), TrailingIcon && (_jsx("span", { className: "mx-2", children: _jsx(TrailingIcon, {}) }))] }), helptext && (_jsx("small", { className: `text-xs my-2 text-${col()}`, children: helptext }))] }));
}
