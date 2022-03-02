import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TodosComponent} from "./todos/todos.component";
import { RouterModule, Routes} from "@angular/router";
import {HeaderComponent} from "../header/header.component";
import {TodosService} from "./todos/todos.service";
import {MainComponent} from "../main/main/main.component";
import {TodoComponent} from "../todo/todo.component";
import { FooterComponent } from './todos/footer/footer.component';

const routes: Routes = [
  {
    path: '',
    component: TodosComponent,
  }
]

@NgModule({
  declarations: [
    TodosComponent,HeaderComponent,MainComponent, TodoComponent, FooterComponent
  ],
  imports: [CommonModule, RouterModule.forChild(routes)],
  providers: [TodosService],
})
export class TodosModule { }
