import { createComponentFactory, Spectator, SpyObject } from '@ngneat/spectator';
import { MockBuilder } from 'ng-mocks';
import { TodoModule } from 'app/todo/todo.module';
import { m } from 'app/utils';
import { FormsModule } from '@angular/forms';
import { fakeAsync, tick } from '@angular/core/testing';
import { TodoComponent } from 'app/todo/todo/todo.component';
import { ContextService } from 'app/shared/services/context.service';
import { SharedModule } from 'app/shared/shared.module';

fdescribe('TodoComponent', () =>
{
  let spectator: Spectator<TodoComponent>;
  let component: TodoComponent;
  let ctx: SpyObject<ContextService>;

  const module = MockBuilder(TodoComponent, TodoModule)
    .keep(FormsModule)
    .mock(SharedModule)
    .build();

  const factory = createComponentFactory(m(
    module,
    {
      component: TodoComponent,
      detectChanges: false
    }
  ));

  beforeEach(() =>
  {
    spectator = factory();
    component = spectator.component;
    ctx = spectator.inject(ContextService);
  });

  it('should create', fakeAsync(() =>
  {
    ctx.todo = { id: 1, description: 'aaa', done: false };
    spectator.detectChanges();
    tick();
    expect(component).toBeTruthy();
  }));

  it('should display item correctly if not done', fakeAsync(() =>
  {
    ctx.todo = { id: 1, description: 'aaa', done: false };
    spectator.detectChanges();
    tick();

    expect(spectator.query('.id').innerHTML).toBe('1.');
    expect(spectator.query('.description').innerHTML).toBe('aaa');
    expect(spectator.query<HTMLInputElement>('input').checked).toBe(false);
  }));

  it('should display item correctly if done', fakeAsync(() =>
  {
    ctx.todo = { id: 2, description: 'bbb', done: true };
    spectator.detectChanges();
    tick();

    expect(spectator.query('.id').innerHTML).toBe('2.');
    expect(spectator.query('.description.done').innerHTML).toBe('bbb');
    expect(spectator.query<HTMLInputElement>('input').checked).toBe(true);
  }));

  it('should update todo if checkbox clicked', fakeAsync(() =>
  {
    ctx.todo = { id: 2, description: 'bbb', done: false };
    spectator.detectChanges();
    tick();

    spectator.click('input');

    tick();

    expect(spectator.query<HTMLInputElement>('input').checked).toBe(true);
    expect(ctx.todo.done).toBe(true);
  }));

  it('should emit if remove clicked', fakeAsync(() =>
  {
    ctx.todo = { id: 2, description: 'bbb', done: false };

    spectator.detectChanges();

    tick();

    spectator.click('button');

    expect(ctx.remove).toHaveBeenCalledTimes(1);
  }));
});
