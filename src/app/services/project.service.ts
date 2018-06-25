import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
@Injectable()
export class ProjectService {

  constructor(private http: Http) { }

  url = "http://127.0.0.1:8000/api/project/"

  getProject(project_name){
    return this.http.get(this.url+project_name)
          .map(data => {
            return JSON.parse(data['_body'])
          })
  }

  getAllProjects(){
    return this.http.get(this.url)
          .map(data => {
            return JSON.parse(data['_body'])
          })
  }

  createProject(project){
    return this.http.post(this.url+"add",project)
          .map(data => {
            return JSON.parse(data['_body'])
          })
  }
}
