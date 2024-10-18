import React, { createContext, useState } from 'react';

export const ToggleContext = createContext();

export const ToggleProvider = ({ children }) => {
    const [toggle, setToggle] = useState(true);

    return (
        <ToggleContext.Provider value={{ toggle, setToggle }}>
            {children}
        </ToggleContext.Provider>
    );
};