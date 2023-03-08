import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TodosComponent } from './MyComponents/todos/todos.component';
import { TodoItemComponent } from './MyComponents/todo-item/todo-item.component';
import { AddTodoComponent } from './MyComponents/add-todo/add-todo.component';
import { FormsModule } from '@angular/forms';
import { AboutComponent } from './MyComponents/about/about.component';
import { EducationComponent } from './MyComponents/education/education.component';
import { ContactComponent } from './MyComponents/contact/contact.component';
import { ProjectsComponent } from './MyComponents/projects/projects.component';
import { SkillsComponent } from './MyComponents/skills/skills.component';
import { WorkExperienceComponent } from './MyComponents/work-experience/work-experience.component';
import { PersonalInformationComponent } from './MyComponents/personal-information/personal-information.component';
import { BanerComponent } from './MyComponents/baner/baner.component';
import { Cube3Component } from './MyComponents/cube3/cube3.component';
import { SpiralComponent } from './MyComponents/spiral/spiral.component';
import { PoliceComponent } from './MyComponents/police/police.component';
@NgModule({
  declarations: [
    AppComponent,
    TodosComponent,
    TodoItemComponent,
    AddTodoComponent,
    AboutComponent,
    EducationComponent,
    ContactComponent,
    ProjectsComponent,
    SkillsComponent,
    WorkExperienceComponent,
    PersonalInformationComponent,
    BanerComponent,
    Cube3Component,
    SpiralComponent,
    PoliceComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
