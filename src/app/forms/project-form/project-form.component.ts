import { ProjectInfoValidation } from './project-info.validator';
import { FormBuilder, Validators } from '@angular/forms';
import { Component } from '@angular/core';
import { trigger, transition, animate, style } from '@angular/animations';
import { ProjectService } from '../../services/project.service';

@Component({
  selector: 'app-project-form',
  templateUrl: './project-form.component.html',
  styleUrls: ['./project-form.component.css'],
  animations: [
    trigger('fade', [
      transition('* => void', animate('500ms', style({ opacity: 0 })))
    ])
  ]
})
export class ProjectFormComponent {

  constructor(private fb: FormBuilder, private projectservice: ProjectService) {
    this.projectForm = fb.group({
      projectname: ['',
        Validators.required,
        ProjectInfoValidation.alreadyExists(this.projectservice)
      ],
      description: ['',
        [
          Validators.required,
          Validators.minLength(25),
          Validators.maxLength(250)
        ]
      ]
    })
  }

  private projectForm
  private mandatory

  get projectname() {
    return this.projectForm.get('projectname')
  }

  get description() {
    return this.projectForm.get('description')
  }

  onSubmit() {
    let newProject = {
      "employee_id":localStorage.getItem('employee_id'),
      "project_name":this.projectname.value,
      "description":this.description.value
    }
    if(this.projectForm.valid){
      this.projectservice.createProject(newProject)
        .subscribe(
          data => {
            console.log("Successfully Created ",data)
          },
          error => {
            console.log("Project Creation Failed",error)
          }
        )
    }else{
      this.mandatory = true
      setTimeout(() => {
        this.mandatory = false
      }, 2000);
    }
  }
}