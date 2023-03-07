import { ReactElement } from "react";
import { IWeatherCard } from "../interfaces/WeatherInteface";

export function CardMainPart(props: IWeatherCard): ReactElement{
  return (
    <div className="flex w-[50%] flex-col items-center max-[1100px]:w-[100%] max-[1100px]:mt-[5vh]">
      <p className="text-8xl font-sans mb-[6vh] max-[1100px]:text-6xl max-[1100px]:mb-[.5vh]">{props.data?.name}</p>
      <img src={`http://openweathermap.org/img/wn/${(props.data?.weather[0].icon === undefined) ? '' : props.data?.weather[0].icon}@2x.png`} alt='' className="w-[128px] mb-[1vh] max-[1100px]:mb-[1px]"/>
      <p className="text-6xl font-sans mb-[1vh] max-[1100px]:text-5xl">{(props.data?.main.temp === undefined ) ? '' : Math.round(props.data?.main.temp - 273.15)}&deg;</p>
      <div className="flex flex-col mb-[6vh] max-[1100px]:mb-[2vh]">
        <div>
          <span className="text-3xl font-sans mr-[.5vw] max-[1100px]:text-2xl">min</span>
          <span className="text-3xl font-sans max-[1100px]:text-2xl">{(props.data?.main.temp_min === undefined) ? '' : Math.round(props.data?.main.temp_min - 273.15)}&deg;</span>
        </div>
        <div>
          <span className="text-3xl font-sans mr-[.5vw] max-[1100px]:text-2xl">max</span>
          <span className="text-3xl font-sans max-[1100px]:text-2xl">{(props.data?.main.temp_max === undefined) ? '' : Math.round(props.data?.main.temp_max - 273.15)}&deg;</span>
        </div>
      </div>
      <p className="text-5xl text-gray-600 font-sans max-[1100px]:text-4xl">{props.data?.weather[0].main}</p>
    </div>
  )
}