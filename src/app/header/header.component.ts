import {Component} from '@angular/core';
import {TodosService} from "../todos/todos/todos.service";

@Component({
  selector: 'app-todos-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  text: string = '';

  constructor(private todoService: TodosService) {
  }

  changeText(event: Event): void {
    const target = event.target as HTMLInputElement
    this.text = target.value;
  }

  addTodo(): void {
    this.todoService.addTodo(this.text);
    this.text = '';

  }
}