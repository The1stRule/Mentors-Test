import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthProvider.jsx";
import Button from "./ui/button.jsx";

const Register = () => {
    const [isError, setIsEror] = useState(false);
    const navigation = useNavigate();
    const { handleSubmit, register } = useContext(AuthContext);

    return (
        <section className="form-section">
            <div className="flex flex-col items-center border p-7 rounded-[7px]">
                <h1 className="text-2xl font-bold">Register</h1>
                <form
                    className="flex flex-col gap-2"
                    onSubmit={(e) => handleSubmit(e, register, setIsEror, navigation)}>
                    <div className="input-div">
                        <label className="text-[14px]" htmlFor="username">Username:</label>
                        <input type="text" name="username" id="username" placeholder="Enter your username" required className="input-styles" />
                    </div>
                    <div className="input-div">
                        <label className="text-[14px]" htmlFor="email">Email:</label>
                        <input type="email" name="email" id="email" placeholder="Enter your email" required className="input-styles" />
                    </div>
                    <div className="input-div">
                        <label className="text-[14px]" htmlFor="password">Password:</label>
                        <input type="password" name="password" id="password" placeholder="Enter your password" required className="input-styles" />
                    </div>
                    <Button>Register</Button>
                    <p className="text-red-500 text-[13px] text-center">{isError ? "Email already exists!" : ""}</p>
                    <p className="text-[14px]">Already have an account? <Link to="/authorization" className="font-bold hover:underline">Authorization</Link></p>
                </form>
            </div>
        </section>
    );
}

export default Register;