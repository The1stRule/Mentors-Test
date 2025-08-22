import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../context/AuthProvider.jsx";
import { setLocalStorage } from "../utils/localStorage.js";

const Navbar = () => {
    const { setCurUser } = useContext(AuthContext);

    const handleLogOut = () => {
        setCurUser({});
        setLocalStorage("curUser", {});
    }

    return (
        <section className="w-full h-[10%] flex items-center justify-around bg-gray-300">
            <img src="/logo.jpg" alt="logo" className="w-[60px] rounded-[50%]" />
            <nav className="flex gap-10">
                <Link to="/" className="hover:underline">Home</Link>
                <Link to="/menu" className="hover:underline">Menu</Link>
                <Link to="/cart" className="hover:underline">Cart</Link>
                <Link to="/contact" className="hover:underline">Contact</Link>
            </nav>
            <button 
                onClick={handleLogOut}
                className="border-1 border-black rounded-[5px] px-3 py-0.5 text-[15px] text-white 
                bg-black cursor-pointer hover:text-black hover:bg-white duration-300"
            >Log Out</button>
        </section>
    );
}

export default Navbar;