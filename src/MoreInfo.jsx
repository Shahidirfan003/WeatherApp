import Card from "./Card";
import PropTypes from "prop-types";



export default function MoreInfo({currWeather}){
    return (
        <div >
            <h3>Today`s Highlights</h3>
            <div style={{display:'flex',flexWrap:'wrap'}} >
            <Card info={"Humidity"} value={currWeather.humidity} unit={'%'} />
            <Card info={"Min-Temp"} value={currWeather.temp_min} />
            <Card info={"Max-Temp"} value={currWeather.temp_max}  />
            <Card info={"Wind Status"} value={currWeather.pressure/1000} unit={`km/h`}/>
            <Card info={"Feels Like"} value={currWeather.feels_like} />
            <Card info={"Visibility"} value={currWeather.visibility/1000} unit={`km/h`}/>
            </div>

        </div>
    )
}


MoreInfo.propTypes = {
    currWeather:PropTypes.object,
  };
  