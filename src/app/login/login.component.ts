import { Component, OnInit } from '@angular/core';
import { MainServiceService } from '../main-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [MainServiceService]
})
export class LoginComponent implements OnInit {

  email: any;
  password: any;
  user: any;

  constructor( private router: Router,
               private mainService: MainServiceService ) { }

  ngOnInit() {
  }

  loginUser(){

    this.user = {
      email:this.email,
      password:this.password
    };

    this.mainService.logUser(this.user).subscribe(
      (response) => {
        this.router.navigateByUrl("/register");
      })
  }

}
