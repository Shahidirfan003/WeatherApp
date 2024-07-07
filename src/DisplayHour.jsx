import  HourForecast  from "./HourForecast"
import "bootstrap/dist/css/bootstrap.min.css";
import PropTypes from "prop-types";


export default function DisplayHour({HourWeather}){
  
    return(
        <div style={{marginTop:'1.5rem'}}>
        <h2>3-Hour Forecast</h2>
        <div style={{marginTop:'15px'}} className="row">
            <div className="col-lg-3 col-sm-4"><HourForecast obj={HourWeather[0]}/></div>
            <div className="col-lg-3 col-sm-4"><HourForecast obj={HourWeather[1]}/></div>
            <div className="col-lg-3 col-sm-4"><HourForecast obj={HourWeather[2]}/></div>
            <div className="col-lg-3 col-sm-4"><HourForecast obj={HourWeather[3]}/></div>
            
        </div>
        </div>
    )
}


DisplayHour.propTypes={
    HourWeather:PropTypes.array
 }