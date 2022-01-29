export {}


export default function CurrentData({weather}){
    
    return(
    <div className="flex justify-center">
            <div className="weatherdisplay border-2 rounded-xl border-white p-5">
                <h1>City: {weather.location.name}</h1>
                <h2>Country: {weather.location.country}</h2>
                <p>Time: {weather.location.localtime}</p>
                <img src={weather.current.condition.icon} alt="representation of the condition" width="150" height="150" />
                <h2>{weather.current.condition.text}</h2>
                <p>Temperature in Celsius: {weather.current.temp_c}</p>
                <p>Temperature in Fahrenheit: {weather.current.temp_f}</p>
                <p>Humidity: {weather.current.humidity}</p>
            </div>
    </div>
        )
}