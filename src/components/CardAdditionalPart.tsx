import { ReactElement } from "react";
import { IWeatherCard } from "../interfaces/WeatherInteface";

export function CardAdditionalPart(props:IWeatherCard): ReactElement {
  return (
    <div className="flex flex-col rounded-[25px] mt-[8vh] w-[30%] h-[250px] ml-[2vh] border-white border-2 pl-[2em] pt-[2em] max-[1200px]:w-[35%] max-[1100px]:w-[60%] max-[1100px]:items-center max-[1100px]:pl-[0] max-[600px]:flex-col max-[600px]:h-[350px] max-[600px]:w-[80%]">
      <div className="flex mb-[4vh] max-[600px]:flex-col max-[600px]:items-center">
        <span className="text-3xl font-sans mr-[2vw] max-[1100px]:text2xl">Wind speed <i className="fa-solid fa-wind"></i></span>
        <span className="text-3xl font-sans max-[1100px]:text-2xl">{props.data?.wind.speed}m/s</span>
      </div>
      <div className="flex mb-[4vh] max-[600px]:flex-col max-[600px]:items-center">
        <span className="text-3xl font-sans mr-[2vw]">Humidity <i className="fa-solid fa-droplet"></i></span>
        <span className="text-3xl font-sans max-[1100px]:text-2xl">{props.data?.main.humidity}%</span>
      </div>
      <div className="flex mb-[4vh] max-[600px]:flex-col max-[600px]:items-center">
        <p className="text-3xl font-sans mr-[2vw]">Pressure <i className="fa-solid fa-gauge"></i></p>
        <span className="text-3xl font-sans max-[1100px]:text-2xl">{props.data?.main.pressure}hPa</span>
      </div>
    </div>
  )
}