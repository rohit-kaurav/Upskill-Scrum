import { UserService } from './../services/user.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { Http } from '@angular/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor(private http: Http, private userservice: UserService){}

  private invalidLoginFlag : boolean = false;

  loginform = new FormGroup({
    username: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required)
  })

  get username() {
    return this.loginform.get('username');
  }
  get password() {
    return this.loginform.get('password');
  }

  onSubmit() {
    // this.http.get('http://127.0.0.1:8000/api/user/')
    //   .subscribe(
    //     res => console.log('data',res),
    //     error => console.log('error',error)
    //   )
  }

}
