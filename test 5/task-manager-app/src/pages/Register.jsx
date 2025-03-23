import { useContext, useState } from "react";
import { AuthContext } from "../context/AuthProvider.jsx";
import { Link, useNavigate } from "react-router-dom";

const Register = () => {
    const { handleSubmit, register } = useContext(AuthContext);
    const [isError, setIsError] = useState(false);
    const navigate = useNavigate();
    return (
        <div className="reg-auth-form">
            <h1>Register</h1>
            <form onSubmit={(e) => handleSubmit(e, register, navigate, setIsError)}>
                <div className="input-div">
                    <label htmlFor="username">Username:</label>
                    <input type="text" name="username" id="username" placeholder="Enter your username" required />
                </div>
                <div className="input-div">
                    <label htmlFor="email">Email:</label>
                    <input type="email" name="email" id="email" placeholder="Enter your email" required />
                </div>
                <div className="input-div">
                    <label htmlFor="password">Username:</label>
                    <input type="password" name="password" id="password" placeholder="Enter your password" required />
                </div>
                <button>Register</button>
                <p className="form-p">Already have an account? <Link to="/authorization">Authorization</Link></p>
            </form>
            <p className="error-message">{isError? "Email is already exists!" : ""}</p>
        </div>
    );
}

export default Register;