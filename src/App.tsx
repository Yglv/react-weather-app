import axios from 'axios';
import React, { useEffect, useState } from 'react';
import './App.css';
import { WeatherCard } from './components/WeatherCard';
import { IWeatherData } from './interfaces/WeatherInteface';

function App() {
  const [weatherData, setWeatherData] = useState<IWeatherData | undefined>()
  const [location, setLocation] = useState<string>('')

  // Enter the appid
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=3a6f1443ec71d4d68beeb04653949d39`
  const startURL = `https://api.openweathermap.org/data/2.5/weather?q=Minsk&appid=3a6f1443ec71d4d68beeb04653949d39`
  const searchLocation = (event:React.KeyboardEvent<HTMLInputElement>):void => {
    if (event.key === 'Enter') {
      axios
      .get(url)
      .then(res => {
        setWeatherData(res.data)
        console.log(res.data)
      })
      setLocation('')
    }
  }
  useEffect(() => {
    axios
      .get(startURL)
      .then(res => {
        setWeatherData(res.data)
        console.log(res.data)
      })
  },[])
  return (
    <div className={(weatherData?.main.temp===undefined) ? '' : ((weatherData?.main.temp -273.15 < 20) ? "flex flex-col text-white min-h-[100vh] w-full items-center bg-sky-500" : "flex flex-col min-h-[100vh] text-white w-full items-center bg-orange-300")}>
      <div className='w-full mt-[4vh] ml-[2vw]'>
        <div className='relative'>
          <i className="fa-solid fa-magnifying-glass absolute inset-y-2 left-[1%] mr-[1%] text-gray-400 text-lg max-[1100px]:text-xl max-[1100px]:inset-y-3 max-[650px]:text-2xl "></i>
          <input type="search"
            value={location}
            onChange={(event):void => setLocation(event.target.value)} 
            onKeyPress={(event:React.KeyboardEvent<HTMLInputElement>) => searchLocation(event)}
            className={(weatherData?.main.temp===undefined) ? "" : 
              ((weatherData?.main.temp -273.15 < 20) ? "text-2xl border-gray-300 text-gray-400 border-radius rounded-[25px] h-[40px] w-[30%] p-[1%] pl-[3%] border-2 focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-sky-500 max-[1100px]:w-[60%] max-[1100px]:h-[50px] max-[1100px]:pl-[4%] max-[750px]:pl-[6%] max-[650px]:w-[100%] max-[650px]:text-3xl max-[550px]:pl-[8%] max-[450px]:h-[55px]" :
              "text-2xl border-gray-300 text-gray-400 border-radius rounded-[25px] h-[40px] w-[30%] p-[1%] pl-[3%] border-2 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 max-[1100px]:w-[60%] max-[1100px]:h-[50px] max-[1100px]:pl-[4%] max-[750px]:pl-[6%] max-[650px]:w-[100%] max-[650px]:text-3xl max-[550px]:pl-[8%] max-[450px]:h-[55px]")}
            placeholder='Enter the city...'
            />   
        </div>
      </div>
      {weatherData && <WeatherCard data={ weatherData }/>}
    </div>
  );
}

export default App;
