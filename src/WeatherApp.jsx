import React, { useState , useRef } from 'react'

import Input from './Components/Input'
import { CardContent, Cards } from './Components/Cards'
import Button from './Components/Button'
import {Sun , CloudRain , Snowflake} from 'lucide-react'

const API_KEY = import.meta.env.VITE_API_KEY 


const WeatherApp = () => {
    const [city, setCity] = useState("")
    const [weather, setWeather] = useState("")
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState("")
    const inputRef = useRef("")

    const fetchWeather = async()=>{
        setLoading(true)
        setError('')
        const city1 = inputRef.current?.value;
        if(!city1){
            setError("Please enter a city name")
            setLoading(false)
            
            return
        }
        
        try {
            const response = await fetch(
                `https://api.openweathermap.org/data/2.5/weather?q=${city1}&appid=e9b5f0332fb7105735e8b27596b1b3c6&units=metric`
            )
             if(!response.ok) throw new Error('City not found or API error')
                
            const data = await response.json()
            setWeather(data)
            console.log(data)
            
        } catch (error) {
            setError(error.message)
            setWeather(null) 
        }
        setLoading(false)
    }
    
    const getWeatherIcon = (main) => {
        switch(main){
            case "Clear":
                return <Sun className='text-yellow-400 w-10 h-10'/>
            case "Rain":
                return <CloudRain className='text-blue-400 w-10 h-10'/>
            case "Snow":
                return <Snowflake className='text-blue-400 w-10 h-10'/>

        }
    }

    return (
      <div className='h-[100vh] w-[100vw] bg-gradient-to-br from-blue-100 to-blue-300  items-center justify-center p-10 flex '>
        <Cards className='w-full max-w-md p-6 shadow-2xl rounded-2xl'>
            <CardContent>
                <h1 className='text-3xl font-bold mb-4 p-6 flex justify-center align-center shadow-2xl rounded-2xl'>Weather App</h1>
                <div className='flex  justify-center align-center gap-2 mb-4'>
                   
                     <input className='border border-gray-300 text-center rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500'
                          type="text"
                          value={city}
                          onChange={(e) => {
                            setCity(e.target.value);
            
                        }}
                          placeholder='enter city name'
                          
                            ref={inputRef} 
    />
                    
                    <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition-colors duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                    onClick={fetchWeather}>
                        {
                            loading?'Loading':"Search"
                        }

                    </button>
                    
                    </div>
                    {error && (
                        <div className="text-red-500 text-center mt-4 w-full">
                            {error}
                        </div>
                    )}
                   
                    
                   
                 {
                       weather &&(
                        <div className='text-center mt-6  top-16 right-52'>
                               {
                                getWeatherIcon(weather.weather[0].main)
                               }
                               <h2 className='text-2xl font-semibold mt-6'>{weather.name} , {weather.sys.country}</h2>
                               <p className='text-lg text-gray-700'>
                                {weather.weather[0].main}
                                {weather.weather[0].description}
                               </p>
                               <p className='text-4xl font-bold text-blue-400'>
                                 {weather.main.temp}°C
                               </p>

                        </div>
                       )
                    }

            </CardContent>
        </Cards>    
    </div>
  )
}

export default WeatherApp;
