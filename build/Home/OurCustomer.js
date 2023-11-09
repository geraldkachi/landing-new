import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import FaceCard1 from "../../assets/home/facecard.svg";
import "./testimoinal.css";
export const clients = [
    {
        img: FaceCard1,
        name: "Tobi Oluwaseyi",
        star: "stars",
        review: "It's a really nice app with a quick disbursement process. I honestly recommend this app for urgent and quick loan applications."
    },
    {
        img: FaceCard1,
        name: "Tobi Oluwaseyi",
        star: "stars",
        review: "It's a really nice app with a quick disbursement process. I honestly recommend this app for urgent and quick loan applications."
    },
    {
        img: FaceCard1,
        name: "Tobi Oluwaseyi",
        star: "stars",
        review: "It's a really nice app with a quick disbursement process. I honestly recommend this app for urgent and quick loan applications."
    },
];
const OurCustomer = ({ faqs }) => {
    return (_jsx("div", { ref: faqs, className: "px-5 pt-10 pb-20 bg-[#043144]", children: _jsx("div", { className: "max-w-7xl mx-auto mt-10 text-white testis", children: _jsxs("div", { className: "my-5 text-center", children: [_jsx("h1", { className: "text-3xl md:text-[40px] my-5", children: "What Our 2M+ Customers Are Saying" }), _jsx("p", { children: "We always put our customers first at Arvo" })] }) }) }));
};
export default OurCustomer;
