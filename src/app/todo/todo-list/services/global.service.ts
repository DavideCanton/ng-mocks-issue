import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GlobalService
{
  private sub = new Subject<number>();
  obs$ = this.sub.asObservable();

  remove(id: number)
  {
    this.sub.next(id);
  }
}
