import React from "react";
import "./Card.css";


interface Props {
    companyName: string;
    ticker: string;
    price: number;
}


const Card: React.FC<Props> = ({companyName, ticker, price} : Props) : JSX.Element => {
    return <div className="card">
        <div className="details">
            <h2>{companyName} ({ticker})</h2>
            <p>${price}</p>
        </div>
        <div className="info">
            Lorem ipsum
        </div>
        </div>
} 

export default Card;