import { Component, OnInit } from '@angular/core';
import { User } from '../models/user.model';

@Component({
  selector: 'app-my-profile',
  templateUrl: './my-profile.component.html',
  styleUrls: ['./my-profile.component.css']
})
export class MyProfileComponent {

  constructor() {
    this.currentUser = new User()
    this.currentUser.name = localStorage.getItem('name')
    this.currentUser.username = localStorage.getItem('username')
    this.currentUser.employeeId = localStorage.getItem('employee_id')
    this.currentUser.role = localStorage.getItem('role')
  }

  private currentUser:any
}
