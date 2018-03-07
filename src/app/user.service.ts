import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import * as data from './user.json';

@Injectable()
export class UserService {

  constructor(private http:HttpClient) { }

  getAllUsers(){
    return this.http.get('http://localhost:4210/users');
  }

  addNewUser(newuser){
    var headers = new HttpHeaders().set("Content-Type", 'application/json');
    return this.http.post('http://localhost:4210/users',newuser,{headers:headers});
  }

  updateUser(user_details,id){
    var headers = new HttpHeaders().set("Content-Type", 'application/json');
    return this.http.put(`http://localhost:4210/users/${id}`,user_details,{headers:headers});
  }

  deleteUser(userId){
    return this.http.delete(`http://localhost:4210/users/${userId}`);
  }

}
