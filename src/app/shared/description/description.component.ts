import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';

@Component({
  selector: 'app-description',
  template: `
    <span class="description" [class.done]="done">{{ description }}</span>
  `,
  styles: [
    `
    span {
      word-break: break-all;
    }
    span.done {
      text-decoration: line-through;
    }
    `
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DescriptionComponent
{
  @Input() done: boolean;
  @Input() description: string;

}
