import { useContext, useState } from "react";
import { AuthContext } from "../context/AuthProvider.jsx";
import { Link, useNavigate } from "react-router-dom";

const Authorization = () => {
    const { authorization } = useContext(AuthContext);
    const [isError, setIsError] = useState(false);
    const navigate = useNavigate();

    return (
        <div className="w-full h-[100vh] flex flex-col justify-center items-center gap-2">
            <h1 className="text-[25px] font-[700]">Authorization</h1>
            <form 
            onSubmit={(e) => authorization(e, setIsError, navigate)}
            className="w-[250px] flex flex-col gap-2"
            >
                <div className="flex flex-col">
                    <label htmlFor="email">Email:</label>
                    <input type="email" name="email" id="email" placeholder="Enter your email" required 
                    className="border-1 rounded-[4px] px-2.5 py-1"
                    />
                </div>
                <div className="flex flex-col">
                    <label htmlFor="pass">Password:</label>
                    <input type="password" name="pass" id="pass" placeholder="Enter your password" required 
                    className="border-1 rounded-[4px] px-2.5 py-1"
                    />
                </div>
                <button
                className="border-1 border-black rounded-[5px] px-3 py-0.5 text-[15px] text-white 
                bg-black cursor-pointer hover:text-black hover:bg-white duration-300"
                >Authorization</button>
                <p className="h-[14px] text-red-500 text-[14px]">{isError ? "User not found!" : ""}</p>
            </form>
            <p>Don't have an account? <b><Link 
            to="/register" 
            className="underline">Register</Link></b></p>
        </div>
    );
}

export default Authorization;