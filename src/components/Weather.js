import React,{useEffect, useState} from 'react'
import axios from 'axios';
import WeatherCard from './WeatherCard';

function Weather({city}) {
    const [wheather,setWheather] = useState(null);
    const [loading,setLoading] = useState();

    const apiKey = "9a4e4120b372cc3af390b88bf277341e"

    const getWeather = (city) => {
        setLoading(true);
        axios.get('https://api.openweathermap.org/data/2.5/onecall', {
            params: {
                'lat': city.latitude,
                'lon': city.longitude,
                'appid': apiKey,
                'lang':'tr',
                'units':'metric',
            },
        })
            .then((data) => setWheather(data['data']))
            .catch((err) => console.error(err))
            .finally(setLoading(false));    
    }

    useEffect(()=>{
        getWeather(city);
    },[city])

    return (
        <div className="weather-container">
            {loading && <div>Loading</div>}
            {wheather && 
                wheather.daily.map((day,index) => {
                    return (
                        <WeatherCard key={index} day={day}/>   
                        )
                })
            
            }
            
        </div>
    )
}

export default Weather
