import { jsx as _jsx } from "react/jsx-runtime";
import { useState, createContext, } from "react";
export const EndDateContext = createContext({ date: "", setEndDate: () => { } });
const Context = ({ children }) => {
    const [date, setDate] = useState("");
    return (_jsx(EndDateContext.Provider, { value: { date, setEndDate: setDate }, children: children }));
};
export default Context;
