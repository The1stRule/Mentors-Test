import { menuItems } from "../menu.js";
import Navbar from "../components/NavBar.jsx";
import Footer from "../components/Footer.jsx"
import DishCard from "../components/DishCard.jsx";

console.log(menuItems);
const Menu = () => {
    return (
        <section>
            <Navbar />
            <div className="flex flex-col items-center">
                <h1 className="text-[30px] font-[700] pt-1">Our Menu</h1>
                <div className="grid grid-rows-4 grid-cols-5 gap-x-10 p-10 pb-0">
                    {
                        menuItems.map((curValue, index) => {
                            return <DishCard key={index} dishInfo={curValue} isAdd={true} index={index} />
                        })
                    }
                </div>
            </div>
            <Footer />
        </section>
    );
}

export default Menu;