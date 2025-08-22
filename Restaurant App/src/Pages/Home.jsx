import Footer from "../components/Footer.jsx";
import Navbar from "../components/NavBar.jsx";


const Home = () => {
    return (
        <section className="h-[100vh]">
            <Navbar />
            <div className="h-[70%] bg-[url(/homebg.jpg)] bg-no-repeat bg-cover bg-center 
            flex flex-col justify-center items-center text-">
                <h1 className="text-[50px] font-[700]">Welcome to Nika's restaurant!</h1>
                <p className="text-[20px] font-[600]">Order your desired dishes from the menu.</p>
                <div className="w-[25%] flex flex-col items-center gap-2">
                    <h2 className="text-[19px] font-[600]">What's on the menu?</h2>
                    <ul className="w-full list-disc text-[17px]">
                        <li>Hot and cold dishes</li>
                        <li>Dessert</li>
                        <li>Drink(Water, coffee, tea, wine...)</li>
                    </ul>
                </div>
            </div>
            <Footer />
        </section>
    );
}

export default Home;