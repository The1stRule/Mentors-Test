import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <section className="h-[20%] flex justify-center items-center gap-150 bg-gray-300">
            <nav className="flex flex-col items-center gap-2">
                <h3 className="text-[17px] font-[600]">Navigation</h3>
                <div className="flex gap-5">
                    <Link to="/" className="hover:underline">Home</Link>
                    <Link to="/menu" className="hover:underline">Menu</Link>
                </div>
                <div className="flex gap-5">
                    <Link to="/cart" className="hover:underline">Cart</Link>
                    <Link to="/contact" className="hover:underline">Contact</Link>
                </div>
            </nav>
            <div className="flex flex-col items-center gap-2">
                <h3 className="text-[17px] font-[600]">Contact Info</h3>
                <div>
                    <p><b>Email:</b> nikoloz0812@gmail.com</p>
                    <p><b>Tel:</b> 555-555-555</p>
                    <p><b>Location:</b> Tbilisi/Georgia</p>
                </div>
            </div>
        </section>
    );
}

export default Footer;