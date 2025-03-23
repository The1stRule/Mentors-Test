import { createContext, useEffect, useState } from "react";
import { getLocalStorage, setLocalStorage } from "../utils/localStorage.js";
import { useForm } from "../hooks/useForm.js";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
    const [users, setUsers] = useState(getLocalStorage("users") || []);
    const [curUser, setCurUser] = useState(getLocalStorage("curUser") || {});
    const [handleSubmit] = useForm();
    users.length === 0 && setLocalStorage("users", []);

    useEffect(() => {
        setUsers(prev => {
            const filteredUsers = prev.filter(curValue => curValue.id !== curUser.id && Object.keys(curValue).length > 0);
            setLocalStorage("curUser", curUser);
            setLocalStorage("users", [...filteredUsers, curUser]);
            return [...filteredUsers, curUser];
        })
    }, [curUser])

    const register = (formData, target, navigate, setIsError) => {
        for(const user of users) {
            if(user.email === formData.email) {
                setIsError(true);
                return;
            }
        }

        target.reset();
        setIsError(false);
        setUsers(prev => {
            const newUsers = [...prev, { id: Date.now(), ...formData, taskList: [] }]
            setLocalStorage("users", newUsers);
            return newUsers;
        });
        navigate("/authorization");
    }

    const authorization = (formData, target, navigate, setIsError) => {
        for(const user of users) {
            if(user.email === formData.email && user.password === formData.password) {
                target.reset();
                setIsError(false);
                setCurUser(user);
                setLocalStorage("curUser", user);
                navigate("/");
                return;
            }
        }

        setIsError(true);
    }

    const addTask = (formData, target) => {
        setCurUser(prev => ({ ...prev, taskList: [...prev.taskList, { id: Date.now(), ...formData, isComplite: false, }] }));
        target.reset();
    }

    const deleteTask = (delId) => {
        setCurUser(prev => {
            const newTaskLIst = prev.taskList.filter(curValue => curValue.id !== delId);
            return { ...prev, taskList: newTaskLIst };
        })
    }

    const handleCheckbox = (checkboxId) => {
        setCurUser(prev => {
            const newTaskLIst = prev.taskList.map(curValue => {
                if(curValue.id === checkboxId) {
                    return { ...curValue, isComplite: !curValue.isComplite };
                }

                return curValue;
            });
            return { ...prev, taskList: newTaskLIst };
        })
    }

    const deleteAllComplited = () => {
        setCurUser(prev => {
            const newTaskLIst = prev.taskList.filter(curValue => !curValue.isComplite);
            return { ...prev, taskList: newTaskLIst };
        })
    }
    
    const editTask = (taskId, newTask) => {
        setCurUser(prev => {
            const newTaskLIst = prev.taskList.map(curValue => {
                if(curValue.id === taskId) {
                    return { ...curValue, task: newTask };
                }

                return curValue;
            })

            return { ...prev, taskList: newTaskLIst };
        })
    }

    return (
        <AuthContext.Provider value={{ handleSubmit, register, authorization, curUser, setCurUser, addTask, deleteTask, handleCheckbox, deleteAllComplited, editTask }}>
            {children}
        </AuthContext.Provider>
    );
}

export default AuthProvider;