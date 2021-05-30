import { NgModule } from '@angular/core';
import { ContextDirective } from 'app/shared/directives/context.directive';

@NgModule({
  declarations: [
    ContextDirective
  ],
  exports: [
    ContextDirective
  ]
})
export class SharedModule {

}
