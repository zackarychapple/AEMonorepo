import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'ignite-option',
  templateUrl: './option.component.html',
  styles: [],
  host: {
    '(click)': 'selectOption()'
  }
})
export class IgniteOptionComponent {
  @Input() value: string;
  @Input() displayedValue: string;
  @Output() optionSelected = new EventEmitter();
  constructor() {
    console.log('Option component is being constructed');
  }

  selectOption() {
    console.log(`select this option: ${this.value} - ${this.displayedValue}`);
    this.optionSelected.emit({
      value: this.value,
      displayedValue: this.displayedValue
    });
  }
}
