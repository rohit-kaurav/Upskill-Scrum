import { ProjectService } from './services/project.service';
import { RegistrationSuccessComponent } from './common/registration-success/registration-success.component';
import { ShortDescriptionPipe } from './pipes/short-description.pipe';
import { ProjectFormComponent } from './forms/project-form/project-form.component';
import { AppComponent } from './app.component';
import { NavbarComponent } from './common/navbar/navbar.component';
import { LoginComponent } from './forms/login/login.component';
import { SignUpComponent } from './forms/signup/signup.component';
import { UserService } from './services/user.service';
import { ProjectsComponent } from './projects/projects.component';
import { InfoContainerComponent } from './common/info-container/info-container.component';

import { RoutesModule } from './routes.module';

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MdComponentsModule } from './common/md-components/md-components.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpModule } from '@angular/http';
import { MyProfileComponent } from './my-profile/my-profile.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignUpComponent,
    NavbarComponent,
    ProjectsComponent,
    InfoContainerComponent,
    ProjectFormComponent,
    ShortDescriptionPipe,
    RegistrationSuccessComponent,
    MyProfileComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    NgbModule.forRoot(),
    FormsModule,
    ReactiveFormsModule,
    RoutesModule,
    HttpModule,
    MdComponentsModule
  ],
  providers: [
    UserService,
    ProjectService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
