import { useContext } from "react";
import { AuthContext } from "../context/AuthProvider.jsx";

const DishCard = ({ dishInfo, index, isAdd }) => {
    const { addToCart, removeFromCart } = useContext(AuthContext);

    return (
        <div className="flex flex-col gap-1">
            <img
                src={dishInfo.image}
                alt={dishInfo.name}
                className="w-full h-[50%]"
            />
            <h3 className="text-[17px] font-[600]">{dishInfo.name}</h3>
            <p>Price: <b>${dishInfo.price}</b></p>
            {
                isAdd ? <button
                    onClick={() => addToCart(dishInfo)}
                    className="border-1 border-black rounded-[5px] px-3 py-0.5 text-[15px] text-white 
                bg-black cursor-pointer hover:text-black hover:bg-white duration-300"
                >Add To Cart</button> :
                <button
                    onClick={() => removeFromCart(index)}
                    className="border-1 border-black rounded-[5px] px-3 py-0.5 text-[15px] text-white 
                bg-black cursor-pointer hover:text-black hover:bg-white duration-300"
                >Remove from Cart</button>
            }
        </div>
    );
}

export default DishCard;