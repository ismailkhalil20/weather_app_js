import axios from 'axios';
import React, {useState, useEffect} from 'react'

export default function Card({weather_state_abbr, temp, dayoftheweek}) {
    
 //i am going to fetch the svgs from the api here, you can speak i can hear you
 //yes thats all, do you have diffrent idea or you want to show something else?
 const [Svg, setSvg] = useState();
 
 useEffect(() => {
    axios.get(`https://www.metaweather.com/static/img/weather/${weather_state_abbr}.svg`)
    .then(response => setSvg(response.data))
 },[])
  //how to use an svg in react?
  //did you set update setSvg?

 return (
        <div>
            <h5>{dayoftheweek}</h5>
            <img src={Svg} alt="weather" />
            <p>{temp}&deg;C</p>
        </div>
    )
}
