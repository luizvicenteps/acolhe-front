import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ConfigService } from '../../config/config.service';


const httpOptions = {
  headers: new HttpHeaders  ({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  baseUrlApi: string;

  constructor(private environment: ConfigService, private http: HttpClient) {
    this.baseUrlApi = environment.config.baseUrlApi;
  }

  getUsers() {
    return this.http.get(this.baseUrlApi +'/users');
  }
  saveUser(userForm){
    console.log('Chegou no saveUser');
    console.log(userForm);
    return this.http.post(this.baseUrlApi +'/users', userForm).subscribe();
 
  }
}
