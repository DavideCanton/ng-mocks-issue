import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { SharedModule } from 'app/shared/shared.module';
import { TodoListComponent } from 'app/todo/todo-list/todo-list.component';
import { TodoComponent } from 'app/todo/todo/todo.component';


@NgModule({
  declarations: [
    TodoListComponent,
    TodoComponent
  ],
  exports: [
    TodoListComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    SharedModule
  ]
})
export class TodoModule { }
