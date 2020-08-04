import { Component, OnInit } from '@angular/core'

import { ICurrentWeather } from '../interfaces'

@Component({
  selector: 'app-current-weather',
  templateUrl: './current-weather.component.html',
  styleUrls: ['./current-weather.component.css'],
})
export class CurrentWeatherComponent implements OnInit {
  current: ICurrentWeather

  constructor() {
    this.current = {
      city: 'Tunis',
      country: 'TN',
      date: new Date(),
      image: 'assets/img/sun.png',
      temperature: 44,

      description: 'sunny',
    } as ICurrentWeather
  }

  ngOnInit(): void {}
}
