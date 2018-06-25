import { Observable } from 'rxjs/Observable';
import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class UserService {

  constructor(private http:Http) { }

  url = "http://127.0.0.1:8000/api/user/"

  getUser(username){
    return this.http.get(this.url+"verify/"+username)
          .map(data =>{
            return JSON.parse(data['_body'])
          })
  }

  createUser(user){
    return this.http.post(this.url+"add",user)
          .map(data => {
            return JSON.parse(data['_body'])
          })
  }

  authorizeUser(credentials){
    return this.http.post(this.url+"authorize",credentials)
          .map(data => {
            return JSON.parse(data['_body'])
          })
          // .catch(err => {
          //   return Observable.throw(err)
          // })
  }
}
