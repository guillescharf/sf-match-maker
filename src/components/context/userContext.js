import React, { useState } from "react";

const userContext = React.createContext();


export const useUserContext = () => {
    return React.useContext(userContext)
};



export const UserProvider = ({ children }) => {
    const [user, setUser] = useState(null);

    

    return (
        <userContext.Provider value={{user, setUser}}>
                {children}
        </userContext.Provider>
    );
};