import { Route, Routes } from "react-router-dom";
import ProtectedRote from "./components/ProtectedRote.jsx";
import Products from "./components/Products.jsx";
import Register from "./components/Register.jsx";
import Authorization from "./components/Authorization.jsx";

const App = () => {
    return (
        <main>
            <Routes>
                <Route path="/" element={
                    <ProtectedRote>
                        <Products />
                    </ProtectedRote>
                } />

                <Route path="/register" element={<Register />} />
                <Route path="/authorization" element={<Authorization />} />
            </Routes>
        </main>
    );
}

export default App;