import { Route, Routes } from "react-router-dom";
import Home from './pages/Home.jsx'
import Register from "./pages/Register";
import Authorization from "./pages/Authorization";
import ProtectedRote from "./components/ProtectedRote.jsx";

const App = () => {
    return (
        <Routes>
            <Route path="/" element={
                <ProtectedRote>
                    <Home />
                </ProtectedRote>
            } />
            <Route path="/register" element={<Register />} />
            <Route path="/authorization" element={<Authorization />} />
            <Route path="*" element={<h1>Page not found</h1>} />
        </Routes>
    );
}

export default App;