import React from 'react'
// import {useState} from "react"
import "./Search.css"
function Search({text,setText,datas,onClick}) {
   
  function handleInput(e){
  setText(e.target.value)
  console.log(text)
  }
  if(!datas || !datas.location){
    return <p>data still loding...</p>
  }
   const {location} = datas;
   const {localtime} = location;
  
 
  return (
    <div className ="search">
      <div className="heading">
       <h1>Weather App </h1>
      
       
      </div>
      
         <div className="searchBox">
 
        <div className="inputShow">
          <input type="text" placeholder ="Enter the city name" value ={text} onChange = {(e)=>{handleInput(e)}} /> 
        <button id = "btn" onClick = {onClick} >Search</button>
        </div>

        <div className="dateShow">
          <h2>current Date:</h2>
         <h3>{localtime}</h3>
        </div>
      
      </div>
   
    </div>
  )
}

export default Search
