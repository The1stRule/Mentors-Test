import { createContext, useState } from "react";
import { getLocalStorage, setLocalStorage } from "../utils/localStorage";



export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
    const [users, setUsers] = useState(getLocalStorage("users") || []);
    const [curUser, setCurUser] = useState(getLocalStorage("curUser") || {});

    const register = (e, setIsError, navigate) => {
        e.preventDefault();

        const newUser = {
            fullname: e.target.fullname.value,
            email: e.target.email.value,
            password: e.target.pass.value,
            cart: []
        }

        for(const user of users) {
            if(user.email === newUser.email) {
                setIsError(true);
                return;
            }
        }

        setUsers(prev => {
            setLocalStorage("users", [...prev, newUser]);
            return [...prev, newUser];
        })

        setIsError(false);
        navigate("/authorization");
    }

    const authorization = (e, setIsError, navigate) => {
        e.preventDefault();
        
        for(const user of users) {
            if(user.email === e.target.email.value && user.password === e.target.pass.value) {
                setCurUser(user);
                setLocalStorage("curUser", user);
                setIsError(false);
                navigate("/");
                return;
            }
        }

        setIsError(true);
    }

    const addToCart = (dish) => {
        setCurUser(prev => {
            const newCartList = [...prev.cart, dish];
            setLocalStorage("curUser", { ...prev, cart: newCartList });
            return { ...prev, cart: newCartList };
        })
    }

    const removeFromCart = (delIndex) => {
        setCurUser(prev => {
            const newCartList = prev.cart.filter((_, index) => index !== delIndex);
            setLocalStorage("curUser", { ...prev, cart: newCartList });
            return { ...prev, cart: newCartList };
        })
    }

    return (
        <AuthContext.Provider value={{ curUser, setCurUser, register, authorization, addToCart, removeFromCart }}>
            { children }
        </AuthContext.Provider>
    );
}

export default AuthProvider;