import { ShortDescriptionPipe } from './pipes/short-description.pipe';
import { ProjectFormComponent } from './forms/project-form/project-form.component';
import { AppComponent } from './app.component';
import { NavbarComponent } from './common/navbar/navbar.component';
import { LoginComponent } from './login/login.component';
import { SignUpComponent } from './forms/signup/signup.component';
import { UserService } from './services/user.service';
import { ProjectsComponent } from './projects/projects.component';
import { InfoContainerComponent } from './common/info-container/info-container.component';

import { RoutesModule } from './routes.module';

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MdComponentsModule } from './common/md-components/md-components.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpModule } from '@angular/http';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignUpComponent,
    NavbarComponent,
    ProjectsComponent,
    InfoContainerComponent,
    ProjectFormComponent,
    ShortDescriptionPipe
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    RoutesModule,
    HttpModule,
    MdComponentsModule
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
