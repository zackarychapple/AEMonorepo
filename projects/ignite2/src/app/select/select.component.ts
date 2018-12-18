import {Component, EventEmitter, Input, Output, ViewEncapsulation, ContentChildren, QueryList, AfterContentInit} from '@angular/core';
import { IgniteOptionComponent } from './option.component';

@Component({
  selector: 'ignite-select',
  templateUrl: './select.component.html',
  styles: [
    `:host { display: inline-block; }`,
    `.panel-wrapper { background-color: white; border: 1px solid lightgrey; }`,
    `.select-trigger { border: 1px lightgrey solid; }`,
    `.fake-down-arrow { margin-left: 10px; background-color: darkgrey; color: white; padding: 0 7px; }`
  ]
})
export class IgniteSelectComponent implements AfterContentInit {
  @Input() placeholder: string;
  @Input() value: any;
  @ContentChildren(IgniteOptionComponent) options: QueryList<IgniteOptionComponent>;

  displayText = ' select value ';

  constructor() {}

  ngAfterContentInit() {
    console.log(this.options);
    this.options.forEach(igniteOption => {
      igniteOption.optionSelected.subscribe(o => {
        this.displayText = `${o.value} (${o.displayedValue})`;
      })
    });
  }

  panelOpen = false;
  toggle() {
    this.panelOpen = !this.panelOpen;
    console.log(`panel open: ${this.panelOpen}`)
  }
}
