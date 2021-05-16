import React, {useState, useEffect} from 'react'
import Image from '../../assests/Anonymous_simple_weather_symbols_11.svg'

export default function Card({weather_state_abbr, temp, dayoftheweek}) {
    
 const [WeatherCondition, setWeatherCondition] = useState();
 
 useEffect(() => {
    fetch(`https://www.metaweather.com/static/img/weather/${weather_state_abbr}.svg`)
    .then(response => response.text())
    .then(response => {
        setWeatherCondition(response) })
    
 },[])

 return (
        <div>
            <img src={Image} alt="weather condition" className="h-20" />
            <div className="flex justify-between">
                <p>{dayoftheweek.slice(0, 3)}</p>
                <span>{temp}&deg;C</span>
            </div>
        </div>
    )
}
