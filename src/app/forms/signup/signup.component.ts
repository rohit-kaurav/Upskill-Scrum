import { PasswordValidation } from './validators/password.validator';
import { UserValidation } from './validators/user.validator';
import { Router } from '@angular/router';
import { UserService } from './../../services/user.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { transition, trigger, animate, style, state } from '@angular/animations';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
  animations: [
    trigger('fade', [
      transition('* => void', animate('500ms', style({ opacity: 0 })))
    ])
  ]
})
export class SignUpComponent {

  signUpForm: FormGroup;
  // emailPattern = "^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$";
  mandatory: boolean = false;

  constructor(fb: FormBuilder, private userservice: UserService, private router: Router) {
    this.signUpForm = fb.group({
      name: ['', Validators.required],
      username: ['',
        [Validators.required, Validators.minLength(5)],
        UserValidation.alreadyExists(this.userservice)
      ],
      passwordgroup: fb.group({
        password: ['',
          [Validators.required, Validators.minLength(5)]
        ],
        confirmpassword: []
      }, { validator: PasswordValidation.passwordsDontMatch }),
      employeeid: ['',
        Validators.required
      ]
    })
  }

  get name() {
    return this.signUpForm.get('name');
  }

  get username() {
    return this.signUpForm.get('username');
  }

  get email() {
    return this.signUpForm.get('email');
  }

  get employeeid() {
    return this.signUpForm.get('employeeid');
  }

  get password() {
    return this.signUpForm.get('passwordgroup').get('password');
  }

  get confirmpassword() {
    return this.signUpForm.get('passwordgroup').get('confirmpassword');
  }

  get passwordgroup() {
    return this.signUpForm.get('passwordgroup');
  }

  onSubmit() {
    let newUser = {
      "employee_id": this.signUpForm.value.employeeid,
      "name": this.signUpForm.value.name,
      "username": this.signUpForm.value.username,
      "password": this.signUpForm.value.passwordgroup.password
    }
    if (this.signUpForm.valid) {
      this.userservice.createUser(newUser)
        .subscribe(
          response => {
            console.log("response came ", response)
            this.router.navigate(['registration-success'])
          },
          error => {
            console.log("error came ", error)
          })
    }else{
      this.mandatory = true
      setTimeout(() => {
        this.mandatory = false
      }, 2000);
    }
  }
}
