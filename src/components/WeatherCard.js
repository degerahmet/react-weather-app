

function WeatherCard({ day, index }) {
    return (
        <div className="weather-card"> 
            <h3 className="temp">{day.temp.day} °C</h3>
            <img alt={day.weather[0].description} src={`http://openweathermap.org/img/wn/${day.weather[0].icon}@2x.png`}/>
            <h5> {day.weather[0].description.toUpperCase()} </h5>

        </div>
    )
}

export default WeatherCard
