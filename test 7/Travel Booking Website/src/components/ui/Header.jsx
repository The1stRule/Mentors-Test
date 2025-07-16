import { Link, useNavigate } from "react-router-dom";

const Header = () => {
    const navigate = useNavigate();
    return (
        <header className="flex justify-center w-[100%] fixed top-0 bg-white h-[10vh]">
            <div className="w-[90%] flex justify-between items-center">
                <img src="/images/logo.jpg" alt="logo" onClick={() => navigate("/")} className="h-[100%] cursor-pointer" />
                <nav className="flex gap-10">
                    <Link to="/" className="hover:decoration-solid hover:underline">Home</Link>
                    <Link to="destinations" className="hover:decoration-solid hover:underline">Destinations</Link>
                    <Link to="confirmation" className="hover:decoration-solid hover:underline">Confirmation</Link>
                </nav>
            </div>
        </header>
    );
}

export default Header;