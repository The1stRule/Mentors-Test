import { useContext, useState } from "react";
import { AuthContext } from "../context/AuthProvider.jsx";
import { Link, useNavigate } from "react-router-dom";

const Authorization = () => {
    const { handleSubmit, authorization } = useContext(AuthContext);
    const [isError, setIsError] = useState(false);
    const navigate = useNavigate();

    return (
        <div className="reg-auth-form">
            <h1>Authorization</h1>
            <form onSubmit={(e) => handleSubmit(e, authorization, navigate, setIsError)}>
                <div className="input-div">
                    <label htmlFor="email">Email:</label>
                    <input type="email" name="email" id="email" placeholder="Enter your email" required />
                </div>
                <div className="input-div">
                    <label htmlFor="password">Username:</label>
                    <input type="password" name="password" id="password" placeholder="Enter your password" required />
                </div>
                <button>Authorization</button>
                <p className="form-p">Doesn't have account? <Link to="/register">Register</Link></p>
            </form>
            <p className="error-message">{isError? "User not found!" : ""}</p>
        </div>
    );
}

export default Authorization;