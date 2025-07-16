import { createContext, useEffect, useState } from "react";
import { destinations } from "../destinations.js";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
    const [confirmed, setConfirmed] = useState(JSON.parse(localStorage.getItem("confirmed")) || []);
    const [details, setDetails] = useState({});

    useEffect(() => {
        localStorage.setItem("confirmed", JSON.stringify(confirmed));
    }, [confirmed])

    useEffect(() => {
        console.log(confirmed);
    }, [confirmed])
    
    return (
        <AuthContext.Provider value={{destinations, details, setDetails, confirmed, setConfirmed}}>
            { children }
        </AuthContext.Provider>
    );
}

export default AuthProvider;