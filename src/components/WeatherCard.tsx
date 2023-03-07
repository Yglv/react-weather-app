import React, { ReactElement } from "react";
import { IWeatherCard } from '../interfaces/WeatherInteface';
import { CardAdditionalPart } from "./CardAdditionalPart";
import { CardMainPart } from "./CardMainPart";


export function WeatherCard(props: IWeatherCard):ReactElement{
  return (
    <div className="flex w-full mt-[3em] max-[1100px]:flex-col max-[1100px]:mt-[0] max-[1100px]:items-center">
      <CardAdditionalPart data={props.data}/>
      <CardMainPart data={props.data}/>
    </div>
  )
}