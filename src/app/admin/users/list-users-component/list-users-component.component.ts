import { Component, OnInit } from '@angular/core';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-list-users-component',
  templateUrl: './list-users-component.component.html',
  styleUrls: ['./list-users-component.component.css']
})
export class ListUsersComponentComponent implements OnInit {
  public users;

  constructor(private _usersService: UsersService) { }

  ngOnInit() {
    this.getUsers();
  }
  getUsers() {
       this._usersService.getUsers().subscribe(
          data => { this.users = data},
          err => console.error(err),
          () => console.log(this.users)
        );
      } 
  }
