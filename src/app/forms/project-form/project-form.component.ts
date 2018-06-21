import { FormBuilder, Validators } from '@angular/forms';
import { Component } from '@angular/core';

@Component({
  selector: 'app-project-form',
  templateUrl: './project-form.component.html',
  styleUrls: ['./project-form.component.css']
})
export class ProjectFormComponent {

  constructor(private fb: FormBuilder) {
    this.projectForm = fb.group({
      projectname: ['',Validators.required],
      description: ['',Validators.required]
    })
  }

  projectForm;

  get projectname(){
    return this.projectForm.get('projectname')
  }

  get description(){
    return this.projectForm.get('description')
  }

  onSubmit(){
    
  }
}