import React, { createContext, useState } from 'react';

export const ToggleContext = createContext();

export const ToggleProvider = ({ children }) => {
    const [toggle, setToggle] = useState(false);

    const changeToggle = () =>{
        setToggle(!toggle);
    }

    return (
        <ToggleContext.Provider value={{ toggle, changeToggle }}>
            {children}
        </ToggleContext.Provider>
    );
};