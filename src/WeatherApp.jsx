import SearchBox from "./SearchBox";
import { useState, useEffect } from "react";
import Display from "./Display";
import "bootstrap/dist/css/bootstrap.min.css";
import "./WeatherApp.css";
import MoreInfo from "./MoreInfo";
import  DisplayHour  from "./DisplayHour";


export default function WeatherApp() {
  let [error, setError] = useState(null);
  let [HourWeather,setHourWeather]=useState([{time:'12:00',temp:'24'},{time:'12:00',temp:'24'},{time:'12:00',temp:'24'},{time:'12:00',temp:'24'}])
  let [currWeather, setCurrWeather] = useState({
    city: "London",
    desc: "scattered clouds",
    feels_like: 38.34,
    humidity: 55,
    pressure: 1009,
    temp: 33.23,
    temp_max: 33.73,
    temp_min: 33.23,
    date: "",
    main: "Sunny",
    visibility:'4',
    cityUrl:'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/15/33/f5/de/london.jpg?w=1400&h=1400&s=1'
  });

  useEffect(() => {
    setError(null);
  }, [currWeather]);

  return (
    <div className="container-lg main">
      <div className="row horizontal">
        <div className="col-md-4 col-lg-4  columnOne">
          <SearchBox setCurrWeather={setCurrWeather} setError={setError} setHourWeather={setHourWeather} />
          <Display primaryInfo={currWeather} error={error} />
        </div>
        <div className="col-md-8 col-lg-8 columnTwo">
          <MoreInfo currWeather={currWeather}/>
          <DisplayHour HourWeather={HourWeather}/>
        </div>
      </div>
    </div>
  );
}
