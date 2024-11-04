import React from 'react';
import card from './card';


const countries=(props) =>{
    const {countries,isFetch}=props;

    const renderCountries=(countries) =>{
        return countries.map(( index)=>{
            return (
               isFetch && <card key={'card_${index}'}index={index}
                   borders={countries[index].borders
                    flag={countries[index].flags.svg}
                    name={countries[index].name.common}
                    capital={countries[index].capital}
                    region={countries[index].region}
                    population={countries[index].population}/>
              )
        })

    }
    if(isFetch){
         if(countries.length > 0){
            return(
                <div className="container-80">
                <div className="container-grid">
                {renderCountries(countries)}
                </div>
                </div>
            )
         }else{
            return(
                <div className="container-80">
                 <p>No se encontraron coincidencias</p>
                </div>
            )
         }
    }else{
        <div className="container-80">
                 <p>Cargando paises...</p>
                </div>
    }
}

export default countries;
