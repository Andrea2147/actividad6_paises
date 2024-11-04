import React from "react";

const card = (props) =>{
    const {index ,flag , name , population, region, capital} =props;
   return(
       <div className="card" title={index}>
         <div className="image-container">
            <img src={flag} alt={name + "flag"} className="image"/>
         </div>
         <div className="details">
            <div  className="title">
                <h2>name</h2>
            </div>
            <p>{'Population: ${population}'}</p>
            <p>{'region: ${region}'}</p>
            <p>{'capital: ${capital}'}</p>
         </div>
       </div>
   )
}

export default card;
