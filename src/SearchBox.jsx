import SearchIcon from "@mui/icons-material/Search";
import { useState } from "react";
import PropTypes from "prop-types";


export default function SearchBox({ setCurrWeather, setError,setHourWeather }) {
  const apiKey = import.meta.env.VITE_API_KEY;

  let [city, setCity] = useState("");

  let handleInput = (e) => {
    setCity(e.target.value);
  };

  let getData = async () => {
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    let data = await fetch(url);
    data = await data.json();
    return data;
  };

  let getHourData=async()=>{
    let url2 = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}&units=metric`;
    let data = await fetch(url2);
    data = await data.json();
    return data;
  }

  let Submit = async (e) => {
    try {
      e.preventDefault();
      let data = await getData();
      let data2= await getHourData();
      let currWeather = {
        ...data.main,
        city: city,
        temp: data.main.temp,
        main: data.weather[0].main,
        desc: data.weather[0].description,
        date: new Date().toDateString(),
        visibility: data.visibility,
        cityUrl :await getPicture()
      };
      
      let demo=data2.list.slice(0,4).map((el)=>{
        return {time:el.dt_txt.split(' ')[1],temp:el.main.temp}
     })
     
      setHourWeather(()=>demo)
      setCurrWeather(() => currWeather);
      setCity(() => "");
    } catch (err) {
      setError("Invalid input!");
    }
  };

  let getPicture = async () => {
    const ApiKey = "0_yvp07o_xfern99jFLkkfaYE3Mqgby2AG6q8v330F8";
    const unSplashUrl = `https://api.unsplash.com/photos/random?query=${city}&client_id=${ApiKey}`;

    let data = await fetch(unSplashUrl);
    data = await data.json();
    return data.links.download;
  };

  return (
    <form style={{ display: "flex", alignItems: "center" }} onSubmit={Submit}>
      <input
        id="city"
        label="City Name"
        placeholder="Enter City Names..."
        value={city}
        name="city"
        onChange={handleInput}
        style={{
          width: "100%",
          borderRadius: "1rem",
          padding: "5px 10px",
          appearance: "none",
          border: "none",
          outline: "none",
        }}
      />
      &nbsp;
      <button style={{ border: "none", backgroundColor: "transparent" }}>
        <SearchIcon />
      </button>
    </form>
  );
}

SearchBox.propTypes = {
  setCurrWeather: PropTypes.func,
  setError: PropTypes.func,
  setHourWeather:PropTypes.func
};
