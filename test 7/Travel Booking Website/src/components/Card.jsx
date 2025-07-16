const Card = ({ cardInfo }) => {
    console.log(cardInfo);
    return (
        <>
            <h3>{cardInfo.dest}</h3>
            <img src={cardInfo.src} alt={cardInfo.dest} />
            <p>{cardInfo.name}</p>
            <p>{cardInfo.email}</p>
            <p>{cardInfo.fromDate} - {cardInfo.toDate}</p>
            <p>${cardInfo.price}</p>
        </>
    );
}

export default Card;