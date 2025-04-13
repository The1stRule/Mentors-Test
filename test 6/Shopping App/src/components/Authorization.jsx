import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthProvider.jsx";
import Button from "./ui/button.jsx";

const Authorization = () => {
    const [isError, setIsEror] = useState(false);
    const navigation = useNavigate();
    const { handleSubmit, authorization } = useContext(AuthContext);

    return (
        <section className="form-section">
            <div className="flex flex-col items-center border p-7 rounded-[7px]">
                <h1 className="text-2xl font-bold">Authorization</h1>
                <form 
                className="flex flex-col gap-2"
                onSubmit={(e) => handleSubmit(e, authorization, setIsEror, navigation)}>
                    <div className="input-div">
                        <label htmlFor="email" className="text-[14px]">Email:</label>
                        <input type="email" name="email" id="email" placeholder="Enter your email" required className="input-styles" />
                    </div>
                    <div className="input-div">
                        <label htmlFor="password" className="text-[14px]">Password:</label>
                        <input type="password" name="password" id="password" placeholder="Enter your password" required className="input-styles" />
                    </div>
                    <Button>Authorization</Button>
                    <p className="text-red-500 text-[13px] text-center">{isError ? "User not found!" : ""}</p>
                    <p className="text-[14px]">Don't have an account? <Link to="/register" className="font-bold hover:underline">Register</Link></p>
                </form>
            </div>
        </section>
    );
}

export default Authorization;