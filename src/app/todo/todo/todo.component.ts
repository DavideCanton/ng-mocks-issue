import { Component } from '@angular/core';
import { ContextService } from 'app/shared/services/context.service';

@Component({
  selector: 'app-todo',
  template: `
    <span class="id">{{ todo.id }}.</span>
    <span class="description" [class.done]="todo.done">{{ todo.description }}</span>
    <input type="checkbox" [(ngModel)]="todo.done" [ngModelOptions]="{ standalone: true }" />
    <button (click)="remove()">Remove</button>
  `,
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent
{
  constructor(private context: ContextService) { }

  get todo() { return this.context.todo; }

  remove()
  {
    this.context.remove();
  }
}
