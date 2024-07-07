import PropTypes from "prop-types";


export default function HourForecast({obj}){
    let styles={padding:'5px 0px',textAlign:'center',borderRadius:'.5rem',marginBottom:'10px',backgroundColor:'white'}
    let sunny='https://static.vecteezy.com/system/resources/thumbnails/010/989/785/small_2x/sunny-weather-3d-rendering-isolated-on-transparent-background-ui-ux-icon-design-web-and-app-trend-png.png';
    let cold='https://static.vecteezy.com/system/resources/previews/014/063/252/original/3d-clouds-fluffy-clouds-in-the-sky-for-decorating-cartoon-scenes-png.png';
    let rainy="https://media.istockphoto.com/id/872635134/photo/weather-icon-rain-3d-rendering-isolated-illustration.jpg?s=612x612&w=0&k=20&c=d12rbjzQMo3TL5Og02f6sDzz7qCBia22UA5LsFvlUP8=";

    return(
        <div className="HourCard" style={styles}>
        <p><b>{obj.time}</b></p>
        <img src={obj.temp>30?sunny:obj.temp<15?cold:rainy} alt="Image" style={{width:'100%',borderRadius:'1rem'}}/>
        <h3>{obj.temp}&deg;C</h3>
       </div>
    )
}


HourForecast.propTypes = {
    obj:PropTypes.object,
  };
  

