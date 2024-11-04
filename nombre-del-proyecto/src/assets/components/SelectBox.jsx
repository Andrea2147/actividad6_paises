import React, {useRef}  from 'react';

const SelectBox = (props) =>{


    const {width} = props;

    const regionRef = useRef (null);

    const handlechange= () => {

    }
    return(
        <select onChange={handlechange} ref={regionRef} className="select-box" name="region" style={{width: width + 'px'}} id="region">
            <option   className="option" value="">Filter by Region</option>
        </select>
    )
}


