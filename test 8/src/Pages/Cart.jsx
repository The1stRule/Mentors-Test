import { useContext } from "react";
import { AuthContext } from "../context/AuthProvider.jsx";
import Navbar from "../components/NavBar.jsx";
import Footer from "../components/Footer.jsx";
import DishCard from "../components/DishCard.jsx";

const Cart = () => {
    const { curUser } = useContext(AuthContext);
    return (
        <section className="min-h-[100vh]">
            <Navbar />
            <div className="flex flex-col items-center h-[70%]">
                <h1 className="text-[30px] font-[700] pt-1">Your Cart</h1>
                <h3>Total Price: ${curUser.cart.reduce((acc, cur) => acc + cur.price, 0)}</h3>
                <div className="grid grid-rows-4 grid-cols-5 gap-x-10 p-10 pb-0">
                    {
                        curUser.cart.length === 0 ? <p>Cart is empty</p> :
                        curUser.cart.map((curValue, index) => {
                            return <DishCard key={index} dishInfo={curValue} isAdd={false} index={index} />;
                        })
                    }
                </div>
            </div>
            <Footer />
        </section>
    );
}

export default Cart;