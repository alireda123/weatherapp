import { useState, useEffect } from "react";
import axios from "axios"
export{}

export default function ForecastData({weather}){

    
    return (
        
        <div className="flex">
        {  weather.forecast.forecastday.map(item =>
            (
                <div className="weatherforecast p-5 border-2 border-white rounded-xl mr-6">
                    <h1>Date: {item.date}</h1>
                    <h2>{item.day.condition.text}</h2>
                    <img className="translate-x-2/4" src={item.day.condition.icon} alt="representation of the condition" width="150" height="150" />
                    <p>Peak temperature: {item.day.maxtemp_c}(Celcius)</p>
                    <p>Lowest temperature: {item.day.mintemp_c}(Celcius)</p>
                    <p>Chance of raining: {item.day.daily_chance_of_rain}%</p>
                </div>
            ))
        }

        </div>
     
    )

    
}