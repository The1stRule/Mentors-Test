import { Route, Routes } from "react-router-dom";
import Destination from "./components/Destinations.jsx";
import Homepage from "./components/Homepage.jsx";
import Details from "./components/Details.jsx";
import Booking from "./components/Booking.jsx";
import Confirmation from "./components/Confirmation.jsx";
import Header from "./components/ui/Header.jsx";

const App = () => {
    return (
        <main>
            <Header />
            <div className="mt-[10vh]">
                <Routes>
                    <Route path="/" element={<Homepage />} />
                    <Route path="/destinations" element={<Destination />} />
                    <Route path="/details" element={<Details />} />
                    <Route path="/booking" element={<Booking />} />
                    <Route path="/confirmation" element={<Confirmation />} />
                    <Route path="*" element={<div><h1>Page Not Found</h1></div>} />
                </Routes>
            </div>
        </main>
    );
}

export default App;