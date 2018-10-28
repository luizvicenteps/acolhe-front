import { Component, OnInit } from '@angular/core';
import { Injectable } from '@angular/core';
import { HomeService } from '../admin/home.service';

export interface Config {
  heroesUrl: string;
  textfile: string;
}

@Component({
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
@Injectable()

export class HomeComponent implements OnInit {

  constructor(private HomeService: HomeService) { }

  ngOnInit() {
  }
  showConfig() {
    //var tt = this.home.getConfig();
    //chamando um serviço de HomeService
    this.HomeService.getConfig();
    
  }

}
