import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ITodo } from 'app/models';
import { GlobalService } from 'app/todo/todo-list/services/global.service';

@Component({
  selector: 'app-todo-list',
  template: `
    Todo list (<span>{{done}} / {{todos.length}}</span>)
    <div *ngFor="let todo of todos">
      <ng-container [appContext]="todo"></ng-container>
    </div>
    <hr />
    <span>Add new item:</span>
    <form (ngSubmit)="onAdd()" #form="ngForm">
    <input [(ngModel)]="descToAdd" type="text" name="description" required>
        <button type="submit" [disabled]="form.form.invalid">Add</button>
    </form>
  `,
  styles: [
    `
      div { padding: 10px; }
    `
  ],
})
export class TodoListComponent
{
  descToAdd = '';

  @Input() todos: ITodo[];
  @Output() add = new EventEmitter<string>();
  @Output() remove = new EventEmitter<number>();

  constructor(private global: GlobalService)
  {
    this.global.obs$.subscribe(id => this.remove.emit(id));
  }

  get done()
  {
    return this.todos.filter(t => t.done).length;
  }

  onAdd()
  {
    this.add.emit(this.descToAdd);
    this.descToAdd = '';
  }
}
