import { NgModule } from '@angular/core';
import { ContextDirective } from 'app/shared/directives/context.directive';

import { DescriptionComponent } from './description/description.component';

@NgModule({
  declarations: [
    ContextDirective,
    DescriptionComponent
  ],
  exports: [
    ContextDirective,
    DescriptionComponent
  ]
})
export class SharedModule
{

}
