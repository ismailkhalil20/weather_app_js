import React from 'react'

export default function DetailData({ConsolidatedWeather}) {
    return (
        <div className="text-white flex flex-col gap-8">
            <hr className="white" />
            <h4 className="my-6 text-lg font-bold">Weather Detials</h4>
            <div className="flex justify-between">
                <p>Humidity</p>
                <p>{ConsolidatedWeather[0].humidity}</p>
            </div>
            <div className="flex justify-between">
                <p>Visibility</p>
                <p>{Math.floor(ConsolidatedWeather[0].visibility)}</p>
            </div>
            <div className="flex justify-between">
                <p>Wind Speed</p>
                <p>{Math.floor(ConsolidatedWeather[0].wind_speed)}</p>
            </div>
            <div className="flex justify-between">
                <p>Wind Direction Compass</p>
                <p>{ConsolidatedWeather[0].wind_direction_compass}</p>
            </div>
        </div>
    )
}
