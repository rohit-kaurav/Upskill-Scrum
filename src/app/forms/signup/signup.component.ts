import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { transition, trigger, animate, style, state } from '@angular/animations';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
  animations:[
    trigger('fade',[
      transition('* => void',animate('500ms',style({ opacity:0 })))
    ])
  ]
})
export class SignUpComponent {
  
  signUpForm: FormGroup;
  emailPattern = "^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$";
  mandatory: boolean = false;
  
  constructor(fb: FormBuilder) {
    this.signUpForm = fb.group({
      name: ['', Validators.required],
      username: ['', 
                  [Validators.required, Validators.minLength(5)]
                ],
      passwordgroup: fb.group({
        password: ['', 
                    [Validators.required, Validators.minLength(5)]
                  ],
        confirmpassword: []
      }),
      email: ['', 
              [Validators.required, Validators.pattern(this.emailPattern)]
             ],
      employeeid: ['',
                  Validators.required
              ]
    })
  }

  get name(){
    return this.signUpForm.get('name');
  }

  get username(){
    return this.signUpForm.get('username');
  }

  get email(){
    return this.signUpForm.get('email');
  }

  get employeeid(){
    return this.signUpForm.get('employeeid');
  }

  get password(){
    return this.signUpForm.get('passwordgroup').get('password');
  }

  get confirmpassword(){
    return this.signUpForm.get('passwordgroup').get('confirmpassword');
  }

  get passwordgroup(){
    return this.signUpForm.get('passwordgroup');
  }

  onSubmit() {
    
  }
}
