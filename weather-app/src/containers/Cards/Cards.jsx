import React from 'react'
import Card from './../../components/Card/Card';

export default function Cards({ConsolidatedWeather}) {
    function convert (day) {
        let days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
        let d = new Date(day).getDay();
        return days[d]

    }
    return (
        <div className="row-start-4 row-end-5 col-start-1 col-end-5 items-center flex gap-6 md:pl-20 text-white">
            {ConsolidatedWeather.slice(1).map( day => <Card key={day.id} weather_state_abbr={day.weather_state_abbr} temp={Math.floor(day.the_temp)} dayoftheweek={convert(day.applicable_date)}/>)}
        </div>
    )
}
