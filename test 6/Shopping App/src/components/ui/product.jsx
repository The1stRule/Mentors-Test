import { useContext } from "react";
import Button from "./button";
import { AuthContext } from "../../context/AuthProvider.jsx";

const Product = ({ product }) => {
    const { deleteProduct } = useContext(AuthContext);
    
    return (
        <div className="flex flex-col min-[769px]:justify-between items-center border p-4 rounded-[10px]">
            <img src={product.image} className="w-[200px] min-[769px]:h-[50%]" />
            <div className="w-full">
                <h3 className="text-[18px] font-semibold">{product.title}</h3>
                <p>Category: {product.category}</p>
                <p>Price: <span className="font-semibold">${product.price}</span></p>
                <div className="flex gap-1 mt-2">
                    <Button onClick={() => deleteProduct(product.id)} style="w-full">Delete</Button>
                    <Button style="w-full">Edit</Button>
                </div>
            </div>
        </div>
    );
}

export default Product;