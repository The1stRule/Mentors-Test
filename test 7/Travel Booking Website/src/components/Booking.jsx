import { useContext } from "react";
import { AuthContext } from "../Context/AuthProvider";
import { useNavigate } from "react-router-dom";

const destionationList = [
    "Banff National Park, Canada", "Bali, Indonesia", "Paris, France",
    "Oahu, Hawaii", "Bora Bora", "Dubrovnik, Croatia"
];

const Booking = () => {
    const { destinations, setConfirmed } = useContext(AuthContext);
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        const { name, email, destination, number, fromDate, toDate } = e.target;

        const obj = destinations.filter(curValue => curValue.name === destination.value)[0];

        const newObj = {
            name: name.value,
            email: email.value,
            destination: destination.value,
            number: number.value,
            fromDate: fromDate.value,
            toDate: toDate.value,
            dest: obj.name,
            src: obj.src,
            price: obj.price
        }

        setConfirmed(prev => [...prev, newObj]);
        navigate("/confirmation");
    }
    return (
        <section className="flex flex-col justify-center">
            <h1 className="text-[18px] font-bold">Booking</h1>
            <form onSubmit={handleSubmit}>
                <div className="flex flex-col gap-1">
                    <label htmlFor="name">Name:</label>
                    <input type="text" name="name" id="name" required className="border-[1px] rounded-[5px] w-[200px]" />
                </div>
                <div className="flex flex-col gap-1">
                    <label htmlFor="email">Email:</label>
                    <input type="text" name="email" id="email" required className="border-[1px] rounded-[5px] w-[200px]" />
                </div>
                <div className="flex gap-1">
                    <label htmlFor="dest">Select destination: </label>
                    <select name="destination" id="dest" required className="border-[1px] rounded-[5px] w-[200px]">
                        {
                            destionationList.map((curValue, index) => <option key={index}>{curValue}</option>)
                        }
                    </select>
                </div>
                <div className="flex flex-col gap-1">
                    <label htmlFor="number">Number:</label>
                    <input type="number" name="number" id="number" required className="border-[1px] rounded-[5px] w-[200px]" />
                </div>
                <div className="flex flex-col gap-1">
                    <p>Travel dates</p>
                    <label htmlFor="from-date">From Date: </label>
                    <input type="date" name="fromDate" id="from-date" required  className="border-[1px] rounded-[5px] w-[200px]"/>
                    <label htmlFor="to-date">To Date: </label>
                    <input type="date" name="toDate" id="to-date" required className="border-[1px] rounded-[5px] w-[200px]" />
                </div>
                <button
                    className="text-[14px] border-[2px] px-5 py-0.5 rounded-[5px] bg-black text-white hover:bg-white hover:text-black duration-250"
                >Submit</button>
            </form>
        </section>
    );
}

export default Booking;