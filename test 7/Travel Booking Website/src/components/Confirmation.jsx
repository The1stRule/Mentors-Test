import React, { useContext } from "react";
import { AuthContext } from "../Context/AuthProvider.jsx";
import Card from "./Card";

const Confirmation = () => {
    const { confirmed } = useContext(AuthContext);

    return (
        <section>
            <h1></h1>
            {
                confirmed.length === 0 ? (
                    <div>
                        <h2>No confirmed destinations</h2>
                    </div>
                ) : (
                    confirmed.map((curValue, index) => {
                        return (
                            <React.Fragment key={index}>
                                <Card cardInfo={curValue} />
                            </React.Fragment>
                        );
                    })
                )
            }
        </section>
    );
}

export default Confirmation;