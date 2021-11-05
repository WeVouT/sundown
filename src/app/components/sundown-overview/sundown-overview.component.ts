import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-sundown-overview',
  templateUrl: './sundown-overview.component.html',
  styleUrls: ['./sundown-overview.component.scss']
})
export class SundownOverviewComponent implements OnInit {

  public sundownTime:string;

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.getLinzSundownTime();
  }


  public async getLinzSundownTime(){
    const sunInfo = await this.http.get<any>('https://api.sunrise-sunset.org/json?lat=48.3069&lng=14.2858').toPromise();
    this.sundownTime = sunInfo.results.sunset;
  }


}
