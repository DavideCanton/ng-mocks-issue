import { ComponentFactoryResolver, Directive, Injector, Input, OnInit, ViewContainerRef } from '@angular/core';
import { ITodo } from 'app/models';
import { ContextService } from 'app/shared/services/context.service';
import { TodoComponent } from 'app/todo/todo/todo.component';

@Directive({
  selector: '[appContext]',
  providers: [ContextService]
})
export class ContextDirective implements OnInit
{
  @Input('appContext') todo: ITodo;

  constructor(
    private viewContainer: ViewContainerRef,
    private resolver: ComponentFactoryResolver,
    private contextService: ContextService,
    private injector: Injector
  ) { }

  ngOnInit(): void
  {
    this.contextService.todo = this.todo;

    const factory = this.resolver.resolveComponentFactory(TodoComponent);
    this.viewContainer.clear();
    this.viewContainer.createComponent(factory, 0, this.injector);
  }
}
