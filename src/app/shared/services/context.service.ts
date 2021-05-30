import { Injectable } from '@angular/core';
import { ITodo } from 'app/models';
import { GlobalService } from 'app/todo/todo-list/services/global.service';

@Injectable()
export class ContextService
{
  todo: ITodo;

  constructor(private global: GlobalService) { }

  remove()
  {
    this.global.remove(this.todo.id);
  }
}
