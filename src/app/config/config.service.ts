import { Injectable, Injector } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';


@Injectable()
export class ConfigService {
  private appConfig;
  //private erroConfig;

  constructor (private injector: Injector) { }

  loadAppConfig() {
      let http = this.injector.get(HttpClient);

      return http.get('src/config/config.json')
      .toPromise()
      .then(data => {
          this.appConfig = data;
      })
      .catch(error => {
        console.warn("Error loading app-config.json, using envrionment file instead");
        this.appConfig = environment.production;
    })
  }

  get config() {
      return this.appConfig;
  }}