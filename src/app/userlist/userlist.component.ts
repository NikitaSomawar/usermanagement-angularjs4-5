import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router';
import { UserService } from '../user.service'
import * as data from '../country.json';

@Component({
  selector: 'app-userlist',
  templateUrl: './userlist.component.html',
  styleUrls: ['./userlist.component.css']
})

export class UserlistComponent implements OnInit {
  name;
  email;
  country;
  age;
  userlist;
  editname;
  editemail;
  editcountry;
  editage;
  editid;
  add_status;
  update_status;
  countries;

  constructor(private route:Router,private userservice:UserService) { 
    this.countries = data;
    console.log(this.countries);
  }

///////////////Add User API Call

  addUser(){
    var name = this.name;
    var email = this.email;
    var country = this.country;
    var age = this.age;
    var newuser = {"name":name,"email":email,"country":country,"age":age};
    this.userservice.addNewUser(newuser)
    .subscribe(res => {
      this.userlist.push(res);
      this.add_status = 'data Added Successfully';
    })
    setTimeout(() => {
      this.add_status = '';
    }, 2000);
  }

  formreset(){
    this.name = '';
    this.email = '';
    this.country = '';
    this.age = '';
  }

///////////////Delete User API Call

  deleterecord(id){
    this.userservice.deleteUser(id)
    .subscribe(res => {
      for (var i = 0; i < this.userlist.length; i++) {
        if (this.userlist[i].id === id) {
          this.userlist.splice(i, 1);
          break;
        }
      }
    })
  }

  ///////////////update User API Call

  userDetails(user){
    this.editname = user.name;
    this.editemail = user.email;
    this.editcountry = user.country;
    this.editage = user.age;
    this.editid = user.id;
    
  }

  UpdateUserDetails(){
    var name = this.editname;
    var email = this.editemail;
    var country = this.editcountry;
    var age = this.editage;
    var id = this.editid;
    var user_detail = {"name":name,"email":email,"country":country,"age":age};
    var user_detail_1 = {"name":name,"email":email,"country":country,"age":age,"id":id};
    this.userservice.updateUser(user_detail,id)
    .subscribe(res => {
      this.update_status = 'Data Updated Successfully';
      for (var i = 0; i < this.userlist.length; i++) {
        if (this.userlist[i].id === id) {
          this.userlist[i] = user_detail_1;
          break;
        }
      }
    })
    setTimeout(() => {
      this.update_status = '';
    }, 2000);
  }



///////////////Get Data On Init

  ngOnInit() {
    this.userservice.getAllUsers()
    .subscribe(res => {
      this.userlist = res;
      console.log(this.userlist);
    })
   
  }

}
