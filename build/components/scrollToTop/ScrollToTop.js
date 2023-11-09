import { jsx as _jsx, Fragment as _Fragment } from "react/jsx-runtime";
import { useEffect, useState } from 'react';
import "./styles.css";
const ScrollToTop = ({ children, className }) => {
    const [scrollShowTopButton, setScrollShowTopButton] = useState(false);
    const scrollTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };
    useEffect(() => {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 100) {
                setScrollShowTopButton(true);
            }
            else {
                setScrollShowTopButton(false);
            }
        });
    }, []);
    return _jsx(_Fragment, { children: scrollShowTopButton && _jsx("div", { className: `top-btn-position top-btn-style text-white ${className}`, onClick: scrollTop, children: children }) });
};
export default ScrollToTop;
