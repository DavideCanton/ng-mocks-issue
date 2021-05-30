import { fakeAsync, tick } from '@angular/core/testing';
import { createServiceFactory, SpectatorService } from '@ngneat/spectator';
import { getObservableValue } from 'app/utils';

import { TodoApiService } from './todo-api.service';

describe('TodoApiService', () =>
{
  const factory = createServiceFactory({
    service: TodoApiService
  });
  let spectator: SpectatorService<TodoApiService>;

  beforeEach(() =>
  {
    spectator = factory();
  });

  it('should create', () =>
  {
    expect(spectator.service).toBeTruthy();
  });

  it('should get todo correctly', fakeAsync(() =>
  {
    const { service } = spectator;

    const obsGetter = getObservableValue(service.loadTodos());

    tick(1000);

    const value = obsGetter();
    expect(value).toEqual([
      { id: 1, description: 'Spesa', done: false },
      { id: 2, description: 'Pasta', done: false },
    ]);
  }));
});
