import React from 'react'

export default function DetailData({ConsolidatedWeather}) {
    return (
        <div>
            <h4>Weather Detials</h4>
            <div>
                <p>Humidity</p>
                <p>{ConsolidatedWeather[0].humidity}</p>
            </div>
            <div>
                <p>Visibility</p>
                <p>{Math.floor(ConsolidatedWeather[0].visibility)}</p>
            </div>
            <div>
                <p>Wind Speed</p>
                <p>{Math.floor(ConsolidatedWeather[0].wind_speed)}</p>
            </div>
            <div>
                <p>Wind Direction Compass</p>
                <p>{ConsolidatedWeather[0].wind_direction_compass}</p>
            </div>
        </div>
    )
}
