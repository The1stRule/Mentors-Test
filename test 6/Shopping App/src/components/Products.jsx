import { useContext } from "react";
import { AuthContext } from "../context/AuthProvider.jsx";
import Product from "./ui/product.jsx";
import Button from "./ui/button.jsx";

const Products = () => {
    const { curUser, setCurUser } = useContext(AuthContext);

    return (
        <section className="flex flex-col items-center">
            <header className="flex justify-between w-full px-10 py-3">
                <h1 className="text-2xl font-bold">Products</h1>
                <Button onClick={() => setCurUser({})} style="w-[100px]">Log out</Button>
            </header>
            <div className="w-full px-10 py-3 flex flex-col gap-2">
                <h2 className="text-[18px] font-bold max-sm:text-center">About us</h2>
                <div className="flex items-center gap-2 max-sm:flex-col">
                    <img src="../src/assets/image.jpg" alt="about us" className="w-[200px]" />
                    <div className="flex flex-col max-sm:items-center gap-2">
                        <p className="w-[80%]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit perferendis quo facere nihil ut,
                            dolores eum ipsum, quibusdam numquam maiores quasi ex veniam labore. Veritatis ducimus culpa est quibusdam sunt?</p>
                        <Button style="w-[100px]">More info</Button>
                    </div>
                </div>
            </div>
            <div className="w-full px-10 py-3 max-[769px]:flex max-[769px]:flex-col max-[769px]:gap-5 grid grid-cols-3 gap-3">
                {
                    curUser.products.length > 0 ?
                        curUser.products.map((curValue, index) => <Product key={index} product={curValue} />) : <h2>No Products</h2>
                }
            </div>
            {
                curUser.products.length > 0 && 
                    <div className="w-full pl-10 pb-3">
                        <Button onClick={() => setCurUser(prev => ({ ...prev, products: [] }))} style="w-[150px]">Delete All Products</Button>
                    </div>
            }
        </section>
    );
}

export default Products;