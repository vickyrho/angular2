import { Component, OnInit } from '@angular/core';
import { MainServiceService } from '../main-service.service';
import {Router} from "@angular/router";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
  providers: [ MainServiceService ]
})
export class RegisterComponent implements OnInit {
  ctrl = this ;
  email:any;
  username:any;
  password:any;
  user: any;

  constructor( private mainService : MainServiceService,
               private router : Router) { }

  ngOnInit() {
  }

  registerUser(){

    this.user = {
      email:this.email,
      name:this.username,
      password:this.password
    };

    this.mainService.regUser(this.user).subscribe(
      (response) => {
        this.router.navigateByUrl("/login");
      })
  }

}
