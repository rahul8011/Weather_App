import React ,{useState} from 'react'
import './Weather.css'

const api = {
    key: "bf3596e061c630416cc3e10581d1d513",
    base: "https://api.openweathermap.org/data/2.5/"
}
const Weather = () => {

    const [query,setQuery] = useState('');
    const[weather,setWeather] = useState({});

    const search = evt => {
        if(evt.key === "Enter"){
            fetch(`${api.base}weather?q=${query}&units=metric&APPID=${api.key}`)
            .then(res => res.json())
            .then(result => {
                setWeather(result);
                setQuery('');
                console.log(result);
            })
        }
    }

    const build_Date=(d)=>{
       let months=[
            "Januray",
            "February",
            "March",
            "May",
            "June",
            "July",
            "August",
            "September",
            "Octuber",
            "November",
            "December"
        ];
       let days=["Sunday",
            "Monnday",
            "Tuesday",
            "Wednesday",
            "Thrusday",
            "Friday",
            "Saturday",
        ];
        let day = days[d.getDay()];
        let date = d.getDate();
        let month = months[d.getMonth()];
        let year = d.getFullYear();
        return `${day} ${date} ${month} ${year}`;
    }

       
    
    return(
        <div>
            <main>
                <div className= 'search-box'>
                    <input type= 'text'
                    className= 'search-bar'
                    placeholder='Search...'
                    value={query}
                    onChange={e => setQuery(e.target.value)}
                    onKeyPress={search}
                    />
                </div>

                {(typeof weather.main != "undefined")? (
                    <div className='location-box'>
                        <div className='location'>
                        {weather.name}, {weather.sys.country}</div>
                        <div className='date'>
                            {build_Date(new Date())}
                        </div>
                        <div className='weather-box'>
                            <div className='temp'>
                                {Math.round(weather.main.temp)}°c
                            </div>
                            <div className='weather'>
                                {weather.weather[0].main}
                            </div>
                        </div>
                    </div>
                ):(' ')}
            </main>    
          
        </div>
    )
}
export default Weather