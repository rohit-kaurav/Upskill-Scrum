import { ProjectFormComponent } from './forms/project-form/project-form.component';
import { ProjectsComponent } from './projects/projects.component';
import { SignUpComponent } from './forms/signup/signup.component';
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/login',
    pathMatch: 'full'
  },
  { 
    path: 'projects', 
    component: ProjectsComponent
  },
  { 
    path: 'addproject', 
    component: ProjectFormComponent
  },
  { 
    path: 'signup', 
    component: SignUpComponent
  },
  { 
    path: 'login', 
    component: LoginComponent
  },
  {
    path: '**',
    redirectTo: '/login'
  }
]

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class RoutesModule { }
