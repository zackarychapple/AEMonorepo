import {Component, EventEmitter, Input, Output, ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'ignite-select',
  templateUrl: './select.component.html',
  styles: [],
  encapsulation: ViewEncapsulation.None
})
export class IgniteSelectComponent {
  @Input() placeholder: string;
  @Input() value: any;
  @Output() selectionChange: EventEmitter<any>;

  constructor() {

  }
}
