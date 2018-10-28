import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class HomeService {

  constructor(private http: HttpClient) { }

  configUrl = 'http://localhost/crud-slim3/public/clubes';
  //configUrl = 'assets/config.json';

  getConfig() {
    //return this.http.get(this.configUrl);
    //return this.http.get(this.configUrl);
    //return this.http.get<Config>(this.configUrl);
    return  this.http.get(this.configUrl).subscribe(res => console.log(res));
    
  }
}
