import React from 'react'
import "./Weather.css"

// import {useState} from "react"

function Weather({datas,status}) {

   if (!datas || !datas.location || !datas.current ) {
    return <p>Loading weather details...</p>;
  }
  // const [status,setStatus] = useState()
  const { location, current } = datas;
   const { temp_c, feelslike_c, wind_kph, humidity, condition } = current;
{/* <img src={dayData.day.condition.icon} alt="iconimg" /> */}
   
  return (
    <div className = "weather">
     
     {status ?  <ul className = "lists">
        <li>{location.country},{location.name}</li>
        <li>{condition.text}</li>
        <li>{`${temp_c} degree celsius `} <span>feels like {feelslike_c}</span></li>
        <li>{`wind : ${wind_kph} km/hr | humidity: ${humidity}`}</li>
      </ul> :
      ( <p>there is no data for the city</p>      ) }
     
    </div>
  )
}

export default Weather




//   const weatherIconMap = {
//   Sunny: <WiDaySunny size={60} />,
//   Clear: <WiDaySunny size={60} />,
//   "Partly cloudy": <WiDayCloudy size={60} />,
//   Cloudy: <WiCloudy size={60} />,
//   Overcast: <WiCloudy size={60} />,
//   Mist: <WiFog size={60} />,
//   Fog: <WiFog size={60} />,
//   Rain: <WiRain size={60} />,
//   "Patchy rain possible": <WiShowers size={60} />,
//   "Light rain": <WiRain size={60} />,
//   "Heavy rain": <WiShowers size={60} />,
//   "Thunderstorm": <WiThunderstorm size={60} />,
//   Snow: <WiSnow size={60} />,
//   "Light snow": <WiSnow size={60} />,
//   "Heavy snow": <WiSnow size={60} />,
//   Night: <WiNightClear size={60} />,
//   "Partly cloudy night": <WiNightAltCloudy size={60} />,
// };