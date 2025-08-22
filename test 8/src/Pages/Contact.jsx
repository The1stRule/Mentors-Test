import Navbar from "../components/NavBar.jsx"
import Footer from "../components/Footer.jsx";

const Contact = () => {
    return (
        <section>
            <Navbar />
            <h1>Contact Us</h1>
            <form
                onSubmit={(e) => authorization(e, setIsError, navigate)}
                className="w-[250px] flex flex-col gap-2"
            >
                <div className="flex flex-col">
                    <label htmlFor="message">Message:</label>
                    <input type="text" name="message" id="message" placeholder="Enter your message" required
                        className="border-1 rounded-[4px] px-2.5 py-1"
                    />
                </div>
                <button
                    className="border-1 border-black rounded-[5px] px-3 py-0.5 text-[15px] text-white 
                bg-black cursor-pointer hover:text-black hover:bg-white duration-300"
                >Contact us</button>
            </form>
            <Footer />
        </section>
    );
}

export default Contact;