import axios from "axios";
import {useState, useEffect, useMemo, SetStateAction} from "react"
import ForecastData from "./ForecastData"
import CurrentData from "./CurrentData"

export default function WeatherDisplay() {

    
    interface Data {
        [country: string]: string[]
    }
    // the city input and the day input and History input
    const [City, setCity] = useState(null)
    const [citiesfromapi, setCities] = useState(null)
    const [days, setDays] = useState("")
    const [check, setCheck] = useState(false)
    
    
    
    //the json data for the city validator
    const jsonarray = []
    const [Cities, setCitie] = useState(null)

    //the weather data receiver
    const [weather, setWeather] = useState<any>(null)
    const [theforecast, settheForecast] = useState(null)

    //the renderers depending on the filters used.
    const message = "Please enter a correct city!"

    //booleans for rendering different data
    const [current, setCurrent] = useState(false)
    const [Forecast, setForecast] = useState(false)

    //interface for post request data
    const data: { City: string, Days: string} = {
        City: City,
        Days: days,

    }

    //pushs all cities in world into array
    const filterer = Cities && Cities.filter(item => jsonarray.push(item.name))
    //returns true if city entered is actually a city.
    const checks = jsonarray.some(x => data.City === x)


    const timingofthecurrentday = weather && weather.forecast.forecastday.map(item => item.astro)
    const astronomicalInfo = timingofthecurrentday && timingofthecurrentday[1]


    useEffect(() => {
        axios.get("https://raw.githubusercontent.com/dr5hn/countries-states-cities-database/master/countries%2Bcities.json")
            .then(res => res.data)
            .then(res2 => setCitie(res2.reduce((prev, curr) => [...prev, ...curr.cities], [])))
    }, [])

    useEffect(() => {
        axios.get("http://localhost:5000")
            .then(res => console.log(res))
            .catch(err => console.log("request failed"))
    }, []) 

    const handleClick = (e: { preventDefault: () => void; }) => {
        e.preventDefault();
        if (data.City === "" && data.Days === ""){
            console.log("empty strings not allowed")}
        else{
            axios.post("http://localhost:5000", data)
           .then(res => setWeather(res.data))
           .catch(err => console.log(err))
        }
    
    }

    
    
  
    const handlechangeCity = (e: React.ChangeEvent<HTMLInputElement>) => {
        setCity(e.target.value)}

    const handlechangeDays = (e: React.ChangeEvent<HTMLInputElement>) => {
        setDays(e.target.value)
    }

    

    return(
        <>
        <div className="max-h-full justify-center items-center">
            <div className="flex justify-between">
        <div className="">
        {checks === false ? "Enter the correct city" : null}
        <form>
            <input type="text" name="City" placeholder="City" onChange={handlechangeCity} className={checks === false ? "border-2 border-rose-600 rounded-xl" : "border-2 border-green-600 rounded-xl"}/>
            {Forecast && <input type="text" name="Days" placeholder="Number of days" onChange={handlechangeDays} className="ml-16 rounded-xl" />}
            <div>
            <button className="mt-12 border-2 rounded-xl p-3 hover:scale-105"onClick= {handleClick}>Press here to send</button>
            </div>
        </form>
        </div>
        <div className="mb-9 min-h-[200px] border-2 border-white rounded-xl p-3">
                <h2 className="text-5xl underline">Modes</h2>
                <button className="block mt-5" onClick = {() => setForecast(false)}>Current Weather</button>
                <button onClick={() => {setForecast(true)}} className="p-4">Forecast</button>
        </div>
                </div>
            
           {weather && (Forecast===false) && <CurrentData weather={weather} />}
           {weather && Forecast && <ForecastData weather = {weather}/>}
        </div>
        
            {/* {astronomicalInfo && (
                <div>
                    <p>Sunrise: {astronomicalInfo.sunrise}</p>
                    <p>Sunset: {astronomicalInfo.sunset}</p>
                </div>
            )} */}
        
        </>
    )
}