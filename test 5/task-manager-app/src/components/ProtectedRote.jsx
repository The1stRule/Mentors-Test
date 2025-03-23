import { useContext } from "react"
import { AuthContext } from "../context/AuthProvider.jsx"
import { Navigate } from "react-router-dom";

const ProtectedRote = ({ children }) => {
    const { curUser } = useContext(AuthContext);
    console.log(Object.keys(curUser));
    if(Object.keys(curUser).length === 0) {
        return <Navigate to="/authorization" />;
    }

    return children;
}

export default ProtectedRote;