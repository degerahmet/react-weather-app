import React,{useState} from 'react'
import Dropdown from './Dropdown';
import Wheather from './Weather';

function Main() {
    const [currentCity, setCurrentCity] = useState({
        "id": 34,
        "name": "İstanbul",
        "latitude": "41.0053",
        "longitude": "28.9770",
        "population": 14657434,
        "region": "Marmara"
    });
    return (
        <div className="container">
            <Dropdown setCurrentCity={setCurrentCity}/>
            <Wheather city={currentCity}/>
            
        </div>
    )
}

export default Main
