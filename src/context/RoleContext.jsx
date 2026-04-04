import React, { createContext, useState, useContext } from 'react';

const RoleContext = createContext();

export const RoleProvider = ({ children }) => {
    const [userRole, setUserRole] = useState('customer');

    return (
        <RoleContext.Provider value={{ userRole, setUserRole }}>
            {children}
        </RoleContext.Provider>
    );
};

export const useRole = () => useContext(RoleContext);
