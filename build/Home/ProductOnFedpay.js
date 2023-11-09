import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
// const ProductOnFedpay = () => {
//   return (
//     <div>ProductOnFedpay</div>
//   )
// }
// export default ProductOnFedpay
import Googel from './googleproduct.svg';
import Apple from './applestoreproduct.svg';
import ThreesPhone from './threePhonefedfast.svg';
import { Button, Input } from '../components/components';
const ProductOnFedpay = () => {
    return (_jsxs("div", { className: "", children: [_jsxs("section", { className: "max-w-[1300px] mx-auto bg-[#F9FAFB] py-16 px-3", children: [_jsx("h1", { className: "text-black text-[32px] md:text-[40px] font-bold leading-[56px] ", children: "How to get started on Fedpay" }), _jsx("div", { className: "text-xl font-normal leading-8", children: "Download the arvofinance mobile app to see our range of product to suite your financial needs." })] }), _jsx("div", { className: 'bg-black', children: _jsxs("section", { className: "max-w-[1300px] pt-20 text-center text-white mx-auto px-4", children: [_jsx("h1", { className: "font-bold text-[32px] md:text-5xl leading-[56px]", children: "Get Started with Arvo!" }), _jsx("div", { className: "mt-4 font-normal text-xl leading-8", children: "Available to all government workers who receive their salaries via remitta. Access loans from as low as \u20A610,000 to as high as \u20A61,000,000 in just a few minutes." }), _jsxs("div", { className: 'flex items-center justify-center gap-x-4 mt-20', children: [_jsx("img", { src: Apple, alt: "apple", className: 'cursor-pointer', onClick: () => window.location.href = 'https://arvofinance.page.link/download-app' }), _jsx("img", { src: Googel, alt: "google", className: 'cursor-pointer', onClick: () => window.location.href = 'https://arvofinance.page.link/download-app' })] }), _jsx("div", { className: "mt-20 flex items-center justify-center", children: _jsx("img", { src: ThreesPhone, alt: "phones" }) })] }) }), _jsx("div", { children: _jsx("section", { className: "px-5 py-10 md:py-28 bg-white", children: _jsxs("div", { className: " max-w-[1200px] mx-auto rounded-3xl bg-[#F0F3F5]  py-10", children: [_jsxs("div", { className: "text-center my-5 text-[#141C1F]", children: [_jsx("p", { className: "my-4 text-sm md:text-base", children: "Don't get left behind" }), _jsx("p", { className: "text-lg md:text-[32px] font-semibold", children: "Get Notified About Our Updates" })] }), _jsx("form", { action: "", className: 'flex justify-center items-center"', children: _jsxs("div", { className: "flex-wrap flex justify-center items-center", children: [_jsx("div", { className: "md:mb-6", children: _jsx(Input, { type: "email", className: "\n                                    text-[#668A99]\n                                    w-full\n                                    sm:w-[300px]\n                                    px-4\n                                    sm:px-3\n                                    border-transparent\n                                    text-sm\n                                    rounded-lg\n                                    font-normal\n                                    text-gray-700\n                                    transition\n                                    ease-in-out\n                                    m-0\n                                    ", placeholder: "Enter your email address" }) }), _jsx("div", { className: "md:mr-auto md:mb-6", children: _jsx(Button, { type: "submit", className: "w-full md:w-[unset] inline-block rounded-lg px-6 py-3 border-2 border-white text-white font-medium text-xs leading-tight uppercase hover:bg-[ #065373] hover:bg-opacity-1 focus:outline-none focus:ring-0 transition duration-150 ease-in-out", title: "Submit" }) })] }) })] }) }) })] }));
};
export default ProductOnFedpay;
