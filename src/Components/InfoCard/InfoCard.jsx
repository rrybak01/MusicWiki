import React from 'react';
import "./InfoCard.css";

const CardInfo = ({ title, pic, /*url*/ }) => {
    
    return (
        <div className="contenedorCC">
            <img src={pic} alt={title} />
        </div>    
    );

}

export default CardInfo;