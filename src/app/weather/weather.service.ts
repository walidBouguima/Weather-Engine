import { HttpClient, HttpParams } from '@angular/common/http'
import { Injectable } from '@angular/core'

import { environment } from '../../environments/environment'

interface ICurrentWeatherData {
  weather: [
    {
      description: string
      icon: string
    }
  ]
  main: {
    temp: number
  }
  sys: {
    country: string
  }
  dt: number
  name: string
}

@Injectable({
  providedIn: 'root',
})
export class WeatherService {
  constructor(private httpClient: HttpClient) {}

  // tslint:disable-next-line: typedef
  // hard coded complicated string url
  /* getCurrentWeather(city: string, country: string) {
    return this.httpClient.get<ICurrentWeatherData>(
      `${environment.baseUrl}api.openweathermap.org/data/2.5/weather?` +
        `q=${city},${country}&appid=${environment.appId}`
    )
  }*/
  // use HttParams to build the URL programmatically
  // tslint:disable-next-line: typedef
  getCurrentWeather(city: string, country: string) {
    const uriParams = new HttpParams()
      .set('q', `${city}, ${country}`)
      .set('appid', environment.appId)

    return this.httpClient.get<ICurrentWeatherData>(
      `${environment.baseUrl}api.openweathermap.or/data/2.5/weather`,
      { params: uriParams }
    )
  }
}
