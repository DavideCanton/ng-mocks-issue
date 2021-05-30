import { Injectable } from '@angular/core';
import { ITodo } from 'app/models';
import { ServicesModule } from 'app/services/services.module';

@Injectable({
  providedIn: ServicesModule
})
export class IdManagerService
{
  private currentId = 0;

  register(todo: ITodo)
  {
    this.currentId = Math.max(this.currentId, todo.id);
  }

  getAndIncrementNextId(): number
  {
    return ++this.currentId;
  }
}
