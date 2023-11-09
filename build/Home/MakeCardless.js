import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import Cardless from "./cardless.svg";
import BlackAppPlay from "../../assets/auths/BlackAppPlay.svg";
import BlackGoogleIcon from "../../assets/auths/BlackGoogleIcon.svg";
const MakeCardless = () => {
    return (_jsx("section", { className: "overflow-x-hidden px-5 py-10", children: _jsxs("div", { className: "grid md:grid-cols-2 gap-10 py-10 max-w-[1300px] mx-auto place-items-center", children: [_jsx("div", { className: "text-base text-left self-center justify-items-center py-5 text-[#141C1F]", children: _jsxs("div", { className: "", children: [_jsx("h1", { className: "font-bold text-[#065373] text-3xl md:text-[40px] md:pb-5", children: "Pay with Arvo Link" }), _jsx("p", { className: "my-5", children: "Experience the ease of simplified bulk payments through our smart solution. With our innovative tool, you can easily send money to multiple users at the same time. No need to deal with the complications of doing each transaction separately.                        " }), _jsxs("div", { className: "flex rounded-lg gap-5 text-white mt-9", children: [_jsx("img", { src: BlackGoogleIcon, alt: "BlackGoogleIcon" }), _jsx("img", { src: BlackAppPlay, alt: "BlackAppPlay" })] })] }) }), _jsx("div", { className: "flex items-center justify-center", children: _jsx("div", { className: "w-1/2", children: _jsx("img", { className: 'scale-150 my-4', src: Cardless, alt: "cardless" }) }) })] }) }));
};
export default MakeCardless;
