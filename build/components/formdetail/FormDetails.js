import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from "react";
// import FacebookIcon from '../../assets/home/Facebook.svg'
// import InstagramIcon from '../../assets/home/Instagram.svg'
// import TwitterIcon from '../../assets/home/Twitter.svg'
// import LinkedinIcon from '../../assets/home/Linkedin.svg'
import AddressIcon from "./AddressIcon";
import CallIcon from "./CallIcon";
import SmsIcon from "./SmsIcon";
import SocialIcon from "./SocialIcon";
import { Button, Input } from "../components";
const initalValues = {
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    phoneNumber: '',
};
const FormDetails = ({ contact }) => {
    const [formValue, setFormValue] = useState(initalValues);
    const { firstName, lastName, email, password, phoneNumber, } = formValue;
    const onFinish = (e) => {
        e.preventDefault();
        const values = {
            firstName,
            lastName,
            email,
            password,
            phoneNumber,
        };
    };
    const handleChange = (event) => {
        setFormValue({ ...formValue, [event.target.name]: event.target.value });
    };
    return (_jsx("div", { ref: contact, className: "bg-[#F6F8F9] text-[#141C1F] px-5 py-10", children: _jsxs("div", { className: "grid lg:grid-cols-2 mx-auto gap-10 max-w-[1300px]", children: [_jsxs("div", { className: "items-center self-center max-h-screen text-left basis-1/2", children: [_jsxs("div", { className: "mb-20", children: [_jsx("h1", { className: "text-lg md:text-[40px] font-bold ", children: "Reach Out to Us" }), _jsx("p", { className: "my-2", children: "Contact our customer support 24/7" })] }), _jsxs("div", { children: [_jsx("div", { className: "bg-[#F6AE2D] p-3 rounded-full inline-flex", children: _jsx(AddressIcon, {}) }), _jsx("h2", { className: "text-xl font-semibold", children: "Address" }), _jsxs("p", { className: "mb-5 text-base", children: ["Plot 2 Block 128B Remi Olowude Stree off Marwa Bus-Stop, Lekki", _jsx("br", {}), " Phase 1, Lekki Lagos."] }), _jsx("p", { className: "mb-5 text-base", children: "Bethel House, 1A, Akin Osiyem Street off Allen Avenuie, Ikeja Lagos" })] }), _jsxs("div", { className: "flex items-center gap-20", children: [_jsxs("div", { children: [_jsx("div", { className: "bg-[#02C39A] p-3 rounded-full inline-flex", children: _jsx(CallIcon, {}) }), _jsx("p", { className: "font-semibold mb-5", children: "Switch Board" }), _jsx("p", { children: "(+234) 802 181 0034" }), _jsx("p", { className: 'cursor-pointer mt-3', onClick: () => window.location.href = "https://wa.link/3djnug", children: "(Whatsapp) 2349071380694" })] }), _jsxs("div", { children: [_jsx("div", { className: "bg-[#2E63EA] p-3 rounded-full inline-flex", children: _jsx(SmsIcon, {}) }), _jsx("p", { className: "font-semibold mb-5", children: "Email" }), _jsx("p", { children: "hello@arvopayroll.com" })] })] }), _jsxs("div", { className: "mt-5", children: [_jsx("div", { className: "bg-[#F46036] p-3 rounded-full inline-flex", children: _jsx(SocialIcon, {}) }), _jsx("p", { children: "Socials" })] })] }), _jsx("div", { className: "flex  h-full my-4 w-full ", children: _jsx("div", { className: "bg-white p-5 max-w-2xl mx-auto rounded-3xl shadow-lg w-full", children: _jsxs("form", { onSubmit: onFinish, children: [_jsx(Input, { label: "Full Name", placeholder: "First name, Last name", onChange: handleChange, value: firstName, className: "mt-5 border-[#C2D0D6]" }), _jsx(Input, { label: "Email Address", placeholder: "Enter your email address", onChange: handleChange, value: email, className: "mt-5 border-[#C2D0D6]" }), _jsx(Input, { label: "Phone Number", placeholder: "Enter your phone number", onChange: handleChange, value: phoneNumber, className: "mt-5 border-[#C2D0D6]" }), _jsxs("div", { className: "mt-5", children: [_jsx("label", { className: "block border-[#C2D0D6] text-left mb-2 text-sm font-medium text-gray-900", children: "Your message" }), _jsx("textarea", { id: "message", placeholder: "Type your message here...", className: " h-32 block border-[#C2D0D6] p-2.5 w-full text-sm rounded-lg border  focus:outline-none focus:border-blue-3  placeholder:text-[#668A99]" })] }), _jsx("div", { className: "mt-8", children: _jsx(Button, { variant: "link", className: "w-full !bg-[#065373] !text-[#ffffff] hover:bg-white hover:text-[#065373]", title: "Send Message" }) })] }) }) })] }) }));
};
export default FormDetails;
