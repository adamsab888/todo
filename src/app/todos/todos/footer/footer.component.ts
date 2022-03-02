import { Component, OnInit } from '@angular/core';
import {TodosService} from "../todos.service";
import {map, Observable} from "rxjs";
import {FilterEnum} from "../../../types/filter.enum";


@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
noTodoClass$: Observable<boolean>;
  activeCount$: Observable<number>;
  itemsLeftText$: Observable<string>
  filter$: Observable<FilterEnum>
  filterEnum = FilterEnum;
  constructor(private todosService: TodosService) {
  this.activeCount$ = this.todosService.todos$.pipe(
    map((todos => todos.filter(todo => !todo.isCompleted).length))
  );
    this.itemsLeftText$ = this.activeCount$.pipe(
      map((activeCount) => `item${activeCount !== 1 ? 's' : ''} left`)
  )
  this.noTodoClass$ = this.todosService.todos$.pipe(map((todos) => todos.length === 0))
    this.filter$ = this.todosService.filter$;
  }

  changeFilter(event: Event, filterName: FilterEnum): void {
    event.preventDefault();
    this.todosService.changeFilter(filterName);
  }

  ngOnInit(): void {
  }

}
