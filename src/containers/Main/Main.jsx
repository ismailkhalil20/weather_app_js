import React, { useState, useEffect } from "react";
import axios from "axios";
import DetailData from '../../components/DetailData/DetailData';
import MainData from "../../components/MainData/MainData";
import SearchForm from "../../components/SearchForm/SearchForm";
import Cards from "../Cards/Cards";

function App() {
  const [data, setData] = useState([]);
  const [broadcast, setbroadcast] = useState({});
  const [City, setCity] = useState("Baghdad");
  const [Search, setSearch] = useState("");
  const [broadcasttrue, setbroadcasttrue] = useState(false);


  const CitySearch = (event) => {
    setSearch(event.target.value)
  }

  const handlechange = (e) => {
    e.preventDefault()
    setCity(Search)
    setSearch("")
  }

  useEffect(() => {
    
       axios.get(`https://www.metaweather.com/api/location/search/?query=${City}`)
      .then(response => {
        setData(response.data)
        return response.data[0].woeid
      })
      .then((woeid) => axios.get(`https://www.metaweather.com/api/location/${woeid}/`))
      .then(response => {
        setbroadcast(response.data);
        setbroadcasttrue(true);
      });
    }
    
  , [City] );

 

  return (
    <div className="bg-cold bg-cover h-screen" >
      <div className="grid grid-cols-6 grid-rows-4 gap-2 md:h-screen">
          
            { broadcasttrue ? <MainData today={broadcast.consolidated_weather} City={data[0].title} /> : null }
            { broadcasttrue ? <Cards ConsolidatedWeather={broadcast.consolidated_weather} /> : null }
        
        <div className="col-span-2 p-8 opacity-90 row-span-4 bg-purple-600 bg-opacity-25 flex flex-col justify-around">
          <SearchForm Search={Search} handlechange={handlechange} CitySearch={CitySearch} />
          { broadcasttrue ? <DetailData ConsolidatedWeather={broadcast.consolidated_weather} /> : null }
        </div>
      </div>
    </div>
  );
}
/**
 * LOOK THAT CODE WHEN YOU WANT TO CREATE A INPUR FOR SEARCH
 * const Handle = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    if (name === "city") {
      Setdata({
        city: value,
      });
    }
   
    }
  
    {data.map((cityinfo) => (
        <ul>
          <li>{cityinfo.title}</li>
          <li>{cityinfo.location_type}</li>
          <li>{cityinfo.woeid}</li>
          <li>{cityinfo.latt_long}</li>
        </ul>
      ))}


 THIS IS FOR A SEARCH BUTTON
  <input
          type="text"
          name="city"
          placeholde=""
          onChange={(e) => Handle(e)}
          //this e is like input
        ></input>

 */

export default App;
