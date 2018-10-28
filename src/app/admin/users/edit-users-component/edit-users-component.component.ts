import { Component, OnInit, Injectable } from '@angular/core';
import { UsersService } from '../users.service';
import { NgForm } from '@angular/forms';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { ConfigService } from '../../../config/config.service';

const httpOptions = {
  headers: new HttpHeaders  ({ 'Content-Type': 'application/json' })
};

@Component({
  selector: 'app-edit-users-component',
  templateUrl: './edit-users-component.component.html',
  styleUrls: ['./edit-users-component.component.css']
})
export class EditUsersComponentComponent implements OnInit {
  baseUrlApi: string;
  public users;
  public headers;

  constructor(private _usersService: UsersService, private http: HttpClient, private environment: ConfigService,) {
    this.baseUrlApi = environment.config.baseUrlApi;
   }

  ngOnInit() {
  }
  saveUser(userForm: NgForm){
    console.log('Chegou no saveUser');
    console.log(userForm);
    this.http.post(this.baseUrlApi +'/users', JSON.stringify(userForm)).subscribe();
 
  }

}
