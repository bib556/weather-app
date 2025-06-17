import React from 'react'
import "./Forecast.css"
function Forecast({datas}) {
  if(!datas || !datas.forecast){
    return <p>data loading.....</p>
  }
  const {forecastday} = datas.forecast;
  // const[date,day] = forecastday;
   const getDayName = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { weekday: 'long' }); // e.g., Sun, Mon, Tue
  };

  return (
   
     <div className="container">
      {forecastday.map((dayData, index) => (
        <div key={index} className="day">
          <div className="heading">{getDayName(dayData.date)}</div>
          <div className="sign"><img src={dayData.day.condition.icon} alt="iconimg" /></div>
          <div className="temperature">{dayData.day.avgtemp_c}°C</div>
        </div>
      ))}
    </div>
  
  )
}

export default Forecast
