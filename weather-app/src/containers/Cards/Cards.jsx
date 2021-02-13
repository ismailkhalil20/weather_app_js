import React from 'react'
import Card from './../../components/Card/Card';

export default function Cards({ConsolidatedWeather}) {
    function convert (day) {
        let days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
        let d = new Date(day).getDay();
        return days[d]

    }
    return (
        <div>
            {ConsolidatedWeather.slice(1).map( day => <Card key={day.id} weather_state_abbr={day.weather_state_abbr} temp={Math.floor(day.the_temp)} dayoftheweek={convert(day.applicable_date)}/>)}
        </div>
    )
}
