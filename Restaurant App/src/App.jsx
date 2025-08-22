import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home.jsx";
import Register from "./Pages/Register.jsx";
import Authorization from "./Pages/Authorization.jsx";
import Menu from "./Pages/Menu.jsx";
import Cart from "./Pages/Cart.jsx";
import Contact from "./Pages/Contact.jsx";
import ProtectedRote from "./ProtectedRote.jsx";

const App = () => {
    return (
        <main>
            <Routes>
                <Route path="/" element={
                    <ProtectedRote><Home /></ProtectedRote>
                } />
                <Route path="/register" element={<Register />} />
                <Route path="/authorization" element={<Authorization />} />
                <Route path="/menu" element={
                    <ProtectedRote><Menu /></ProtectedRote>
                } />
                <Route path="/cart" element={
                    <ProtectedRote><Cart /></ProtectedRote>
                } />
                <Route path="/contact" element={
                    <ProtectedRote><Contact /></ProtectedRote>
                } />
                <Route path="*" element={<h1>Page not found!</h1>} />
            </Routes>
        </main>
    );
}

export default App;