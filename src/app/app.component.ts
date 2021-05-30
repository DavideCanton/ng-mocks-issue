import { Component, OnInit } from '@angular/core';
import { maxBy } from 'lodash';
import { finalize } from 'rxjs/operators';
import { ITodo } from 'app/models';
import { IdManagerService } from 'app/services/id-manager.service';
import { TodoApiService } from 'app/services/todo-api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit
{
  todos: ITodo[];
  loading = false;

  constructor(
    private svc: TodoApiService,
    private idManager: IdManagerService
  ) { }

  ngOnInit()
  {
    this.loading = true;
    this.svc.loadTodos().pipe(
      finalize(() => this.loading = false)
    ).subscribe(todos =>
    {
      this.todos = todos;
      this.todos.forEach(t => this.idManager.register(t));
    });
  }

  onAdd(description: string)
  {
    this.todos.push({ id: this.idManager.getAndIncrementNextId(), description, done: false });
  }

  onRemove(id: number)
  {
    const index = this.todos.findIndex(t => t.id === id);
    if(index >= 0)
      this.todos.splice(index, 1);
  }
}
