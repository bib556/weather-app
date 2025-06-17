import React from 'react'
import Navbar from "./Components/Navbar"
import Search from "./Components/Search"
import Weather from "./Components/Weather"
import Forecast from "./Components/Forecast"
import "./App.css"

import {useState,useEffect} from "react";
function App() {
  const [text,setText] = useState("")
const [weatherData,setWeatherData] = useState(null)

const apiKey = import.meta.env.VITE_WEATHER_API_KEY;
  useEffect(()=>{
    async function fetchData(){
      try{
        let fetchedData = await fetch(`http://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=Nepal &days=7&aqi=no&alerts=yes `)
        let parsedData =  await fetchedData.json();
        console.log(parsedData)
        setWeatherData(parsedData)
      }catch(err){
        console.log("error while fetching data",err)
      }
    }
    fetchData();
  },[])
  const[status,setStatus] = useState(false);
  
  // let status = (text=== weatherData.Location || text=== weatherData.name)
  function handleMatch(){
    if (!weatherData || !weatherData.location) return;

  if (text.trim().toLowerCase() === weatherData.location.name.toLowerCase()) {
    setStatus(true);
  } else {
    setStatus(false);
  }
  }
  // for darkmode
  const [isDark,setIsDark] = useState(false);
  const handleColor =()=>{
  setIsDark(prev =>!prev)
  console.log("color button clicked")
  }

  return (
    <div className = {isDark ? "mainBody changed" : "mainBody"}>
        <button onClick ={handleColor} style={{border:"1px solid black",borderRadius:"2px",backgroundColor:"grey"}}>change color</button>
      {/* <Navbar></Navbar> */}
      <Search datas ={weatherData} text ={text} setText={setText} onClick ={()=>{handleMatch()}} isDark ={isDark} handleColor = {()=>{handleColor()}}></Search>
      <Weather datas ={weatherData}  status={status}></Weather>
      <Forecast datas ={weatherData}></Forecast>
      

    </div>
  )
}

export default App


