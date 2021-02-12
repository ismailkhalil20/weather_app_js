import React, { useState, useEffect } from "react";
import axios from "axios";
import DetailData from '../../components/DetailData/DetailData';
import MainData from "../../components/MainData/MainData";
import SearchForm from "../../components/SearchForm/SearchForm";
import Cards from "../Cards/Cards";

function App() {
  const [data, setData] = useState([]);
  const [broadcast, setbroadcast] = useState([]);
  const [City, setCity] = useState("Baghdad");
  const [Search, setSearch] = useState("");


  const CitySearch = (event) => {
    setSearch(event.target.value)
  }

  const handlechange = (e) => {
    e.preventDefault()
    setCity(Search)
  }

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios
      .get(`https://www.metaweather.com/api/location/search/?query=${City}`);

      setData(result.data);
    };

    const fetchDetails = async () => {
      const result = await axios
      .get(`https://www.metaweather.com/api/location/2487956/`);

      setbroadcast(result.data);
    };

    fetchData();
    fetchDetails();
    
  }, [City]);

  useEffect(() => {
    
  }, []);

  return (
    <div>
      {data.map((cityinfo) => (
        <ul>
          <li>{cityinfo.title}</li>
          <li>{cityinfo.location_type}</li>
          <li>{cityinfo.woeid}</li>
          <li>{cityinfo.latt_long}</li>
        </ul>
      ))}
      <MainData />
      <Cards />
      <SearchForm handlechange={handlechange} CitySearch={CitySearch} />
      <DetailData />
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
