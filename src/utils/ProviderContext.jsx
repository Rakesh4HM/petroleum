import React, { createContext, useState } from 'react';

export const ProviderContext = createContext();

export const Provider = ({ children }) => {
    const [token, setToken] = useState(false)
    return (
        <ProviderContext.Provider value={[token, setToken]}>
            {children}
        </ProviderContext.Provider>
    )
}

