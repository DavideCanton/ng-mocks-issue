import { createServiceFactory, SpectatorService } from '@ngneat/spectator';
import { ITodo } from 'app/models';

import { IdManagerService } from './id-manager.service';

describe('IdManagerService', () =>
{
  const factory = createServiceFactory({
    service: IdManagerService
  });
  let spectator: SpectatorService<IdManagerService>;

  beforeEach(() =>
  {
    spectator = factory();
  });

  it('should create', () =>
  {
    expect(spectator.service).toBeTruthy();
  });

  it('should compute and increment id correctly', () =>
  {
    const { service } = spectator;

    service.register({ id: 1 } as ITodo);
    service.register({ id: 2 } as ITodo);
    service.register({ id: 3 } as ITodo);
    expect(service.getAndIncrementNextId()).toBe(4);
    expect(service.getAndIncrementNextId()).toBe(5);
    service.register({ id: 4 } as ITodo);
    service.register({ id: 5 } as ITodo);
    service.register({ id: 6 } as ITodo);
    service.register({ id: 7 } as ITodo);
    expect(service.getAndIncrementNextId()).toBe(8);
  });
});
