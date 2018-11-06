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
  public users;
  public headers;

  constructor(private _usersService: UsersService, private http: HttpClient, private environment: ConfigService,) {

   }

  ngOnInit() {
  }

  saveUser(userForm: NgForm) {
    console.log('Chegou no saveUser SERVICE');
    var ok = this._usersService.saveUser(userForm.value);
    console.log('Ok: '+ok);
   } 

}
