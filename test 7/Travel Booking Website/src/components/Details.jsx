import { useContext } from "react";
import { AuthContext } from "../Context/AuthProvider.jsx";
import { Navigate, useNavigate } from "react-router-dom";

const Details = () => {
    const { details } = useContext(AuthContext);
    if (Object.keys(details).length === 0) return <Navigate to="/destinations" />
    const navigate = useNavigate();

    const handleClick = () => {
        navigate("/destinations");
    }

    return (
        <section className="p-5 pt-3 flex flex-col gap-5">
            <button
                onClick={handleClick}
                className="text-[14px] border-[2px] px-3 py-0.5 rounded-[5px] bg-black text-white hover:bg-white hover:text-black duration-250 w-[70px]"
            >&lt; back</button>
            <div className="flex flex-col items-center">
                <h2 className="text-[25px] font-bold">{details.name}</h2>
                <img src={details.src} alt={details.name} className="w-[35%]" />
                <p className="w-[60%] text-[15px]">{details.description}</p>
                <p className="text-[14px] w-[60%]">Travel price: <span className="text-[18px] font-semibold">${details.price}</span></p>
                <button
                    onClick={() => navigate("/booking")}
                    className="text-[14px] border-[2px] px-5 py-0.5 rounded-[5px] bg-black text-white hover:bg-white hover:text-black duration-250"
                >Booking</button>
            </div>
        </section>
    );
}

export default Details;