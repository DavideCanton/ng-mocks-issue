import { Injectable } from '@angular/core';
import { ITodo } from 'app/models';
import { ServicesModule } from 'app/services/services.module';
import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';

@Injectable({
  providedIn: ServicesModule
})
export class TodoApiService
{

  loadTodos(): Observable<ITodo[]>
  {
    return of([
      { id: 1, description: 'Spesa', done: false },
      { id: 2, description: 'Pasta', done: false },
    ]).pipe(
      delay(1000)
    );
  }
}
