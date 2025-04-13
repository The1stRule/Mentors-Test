import { useContext } from "react";
import { AuthContext } from "../context/AuthProvider.jsx";
import { Navigate } from "react-router-dom";

const ProtectedRote = ({ children }) => {
    const { curUser } = useContext(AuthContext);
    return Object.keys(curUser).length === 0 ? <Navigate to="/authorization"></Navigate> : children;
}

export default ProtectedRote;