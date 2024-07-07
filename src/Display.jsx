import PropTypes from 'prop-types';


export default function Display({primaryInfo,error}){
   let sunny='https://static.vecteezy.com/system/resources/thumbnails/010/989/785/small_2x/sunny-weather-3d-rendering-isolated-on-transparent-background-ui-ux-icon-design-web-and-app-trend-png.png';
   let cold='https://static.vecteezy.com/system/resources/previews/014/063/252/original/3d-clouds-fluffy-clouds-in-the-sky-for-decorating-cartoon-scenes-png.png';
   let rainy="https://media.istockphoto.com/id/872635134/photo/weather-icon-rain-3d-rendering-isolated-illustration.jpg?s=612x612&w=0&k=20&c=d12rbjzQMo3TL5Og02f6sDzz7qCBia22UA5LsFvlUP8=";
    return(
         <>
            {error?<p style={{color:'red'}}>{error}</p>:null}
            <img src={primaryInfo.temp>30?sunny:primaryInfo.temp<15?cold:rainy} alt="Image" style={{width:'100%',height:'250px',marginTop:'20px'}}/>
            <h1 style={{fontSize:'4rem'}}>{primaryInfo.temp}&deg;C</h1>  
            <hr />
            <p>{primaryInfo.main}</p> 
            <p>{primaryInfo.desc}</p>
            <p><b>{primaryInfo.date}</b></p>
            <img src={primaryInfo.cityUrl} alt="Image" style={{width:'100%',height:'150px',marginTop:'20px'}}/>
            <p style={{textAlign:'center'}}><b>{primaryInfo.city}</b></p>
         </>
    )
}


Display.propTypes={
   primaryInfo:PropTypes.object,
   error:PropTypes.string
}