import {Component} from '@angular/core';
import {TodosService} from "../todos/todos/todos.service";
import {FormControl, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-todos-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  todoForm = new FormGroup({
    newTodo: new FormControl()
  })

  constructor(private todoService: TodosService) {
  }


  addTodo(): void {
    this.todoService.addTodo(this.todoForm.controls['newTodo'].value);

  }
}
