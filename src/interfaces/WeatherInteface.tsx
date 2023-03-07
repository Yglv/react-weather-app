export interface IWeatherData {
  weather:{
    0:{
      main: string,
      icon: string
    }
  },
  main: {
    temp: number,
    temp_min: number,
    temp_max: number,
    pressure: number,
    humidity: number
  },
  wind: {
    speed: number
  },
  name: string
}

export interface IWeatherCard{
  data?: IWeatherData | undefined
}
