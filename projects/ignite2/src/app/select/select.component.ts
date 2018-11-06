import {Component, Input} from '@angular/core';

@Component({
  selector: 'ignite-select',
  templateUrl: './select.component.html',
  styles: []
})
export class IgniteSelectComponent {
  @Input() placeholder: string;
  constructor() { }
}
