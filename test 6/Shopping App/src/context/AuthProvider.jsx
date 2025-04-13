import { createContext, useEffect, useState } from "react";
import { getLocalStorage, setLocalStorage } from "../utils/localStorage";
import { useForm } from "../hooks/useForm";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
    const [users, setUsers] = useState(getLocalStorage("users") || []);
    const [curUser, setCurUser] = useState(getLocalStorage("curUser") || {});
    const handleSubmit = useForm();
    const [productsList, setProductsList] = useState([]);

    useEffect(() => {
        if(Object.keys(curUser).length > 0) {
            setUsers(prev => {
                setLocalStorage("curUser", curUser);
                const newUsersList = [...(prev.filter(curValue => curValue.email !== curUser.email)), curUser];
                setLocalStorage("users", newUsersList);
                return newUsersList;
            })
        }
    }, [curUser])

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch("https://fakestoreapi.com/products");
                const data = await response.json();
                setProductsList(data);
            } catch(error) {
                console.log(error);
            }
        }

        fetchData();
    }, [])

    const register = (target, formData, setIsError, navigation) => {
        for(const user of users) {
            if(user.email === formData.email) {
                setIsError(true);
                return;
            }
        }

        target.reset();
        setUsers(prev => {
            const newUsersList = [...prev, { ...formData, products: [...productsList] }];
            setLocalStorage("users", newUsersList);
            return newUsersList;
        })

        navigation("/authorization")
    }

    const authorization = (target, formData, setIsError, navigation) => {
        console.log(formData);
        for(const user of users) {
            if(user.email === formData.email && user.password === formData.password) {
                target.reset();
                setLocalStorage("curUser", user);
                setCurUser(user);
                navigation("/");
            }
        }

        setIsError(true);
    }

    const deleteProduct = (delId) => {
        console.log("bla")
        const newProductsList = curUser.products.filter(curValue => curValue.id !== delId);
        console.log(newProductsList);
        setCurUser(prev => ({ ...prev, products: newProductsList }));
    }

    return (
        <AuthContext.Provider value={{ curUser, setCurUser, handleSubmit, register, authorization, deleteProduct }}>
            {children}
        </AuthContext.Provider>
    );
}

export default AuthProvider;