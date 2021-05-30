import { Observable } from 'rxjs';
import { NgModule } from '@angular/core';
import { SpectatorOptions } from '@ngneat/spectator';
import { omit } from 'lodash';

export function getObservableValue<T>(obs: Observable<T>): () => T
{
  let v: T;
  obs.subscribe(vv => v = vv);
  return () => v;
}

export function m<C>(module: NgModule, opt: SpectatorOptions<C>): SpectatorOptions<C>
{
  return {
    ...opt,
    ...omit(module, 'entryComponents')
  };
}
