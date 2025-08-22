import { useContext, useState } from "react";
import { AuthContext } from "../Context/AuthProvider.jsx";
import { useNavigate } from "react-router-dom";

const Destination = () => {
    const { destinations, setDetails } = useContext(AuthContext);
    const [userInput, setUserInput] = useState(0);
    const navigate = useNavigate();
    
    const handleChange = ({ target }) => {
        if (target.value.length === 0) {
            setUserInput(0)
        } else {
            setUserInput(target.value)
        }
    }

    const handleClick = (obj) => {
        setDetails(obj);
        navigate("/details");
    }

    return (
        <section className="p-5 pt-3 flex flex-col gap-7">
            <form className="flex gap-2 items-center">
                <label htmlFor="price">Filter by price:</label>
                <input type="number" id="price" onChange={handleChange} className="w-[200px] border-[1px] rounded-[5px]" />
            </form>
            <div className="grid grid-cols-3 gap-5">
                {
                    (userInput === 0 ? destinations : destinations.filter(cur => cur.price <= userInput))
                        .map((curValue, index) => {
                            return (
                                <div key={index} className="flex flex-col gap-1">
                                    <h3 className="text-[18px] font-bold">{curValue.name}</h3>
                                    <img src={curValue.src} alt={curValue.name} className="w-full" />
                                    <p className="text-[14px] max-[900px]:text-[12px] max-[700px]:text-[10px]">{curValue.smallDescription}</p>
                                    <p className="text-[14px]">Travel price: <span className="text-4 font-semibold">${curValue.price}</span></p>
                                    <button 
                                    onClick={() => handleClick(curValue)} 
                                    className="text-[14px] border-[2px] px-3 py-0.5 rounded-[5px] bg-black text-white hover:bg-white hover:text-black duration-250"
                                    >Details</button>
                                </div>
                            );
                        })
                }
            </div>
        </section>
    );
}

export default Destination;