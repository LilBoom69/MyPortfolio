import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './MyComponents/about/about.component';
import { TodosComponent } from './MyComponents/todos/todos.component';
import { Cube3Component } from './MyComponents/cube3/cube3.component';
import { SpiralComponent } from './MyComponents/spiral/spiral.component';
import { PoliceComponent } from './MyComponents/police/police.component';

const routes: Routes = [
  { path: 'about', component: AboutComponent },
  { path: '', component: TodosComponent },
  { path: 'cube3', component: Cube3Component},
  { path: 'spiral', component: SpiralComponent},
  { path: 'police', component: PoliceComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
