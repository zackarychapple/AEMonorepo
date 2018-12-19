import {
  Component,
  EventEmitter,
  Input,
  Output,
  ViewEncapsulation,
  ContentChildren,
  QueryList,
  AfterContentInit,
  ViewChildren,
  Injectable,
  OnInit
} from '@angular/core';
import { IgniteOptionComponent } from './option.component';
import { SelectService } from './select.service';

@Component({
  selector: 'ignite-select',
  templateUrl: './select.component.html',
  styles: [
      `:host {
      display: inline-block;
    }`,
      `.panel-wrapper {
      background-color: white;
      border: 1px solid lightgrey;
    }`,
      `.select-trigger {
      border: 1px lightgrey solid;
    }`,
      `.fake-down-arrow {
      margin-left: 10px;
      background-color: darkgrey;
      color: white;
      padding: 0 7px;
    }`
  ],
  encapsulation: ViewEncapsulation.ShadowDom
})
export class IgniteSelectComponent implements OnInit {
  @Input() placeholder: string;
  @Input() value: any;

  // @ContentChildren(IgniteOptionComponent) options: QueryList<IgniteOptionComponent>;
  private _optionComponents: IgniteOptionComponent[] = [];
  get peepsObj(): {display: string, value: string}[] {
    return this._optionComponents.map(item => ({display: item.display, value: item.value}));
  }

  displayText = ' select value ';

  constructor(private selectService: SelectService) {
  }

  selectId: string;

  ngOnInit() {
    this.selectId = 'ignite-select-' + new Date();
    this.selectService.selections.subscribe(item => {
      console.log('new option... ', JSON.stringify(item));
      this.displayText = `${item.option}`;
    });
  }

  _addMe(optionComponent: IgniteOptionComponent): void {
    this._optionComponents.push(optionComponent);
  }

  _removeMe(optionComponent: IgniteOptionComponent): void {
    const len = this._optionComponents.length;
    let i = 0;
    for (; i < len; i++) {
      if (this._optionComponents[i] === optionComponent) {
        this._optionComponents = [...this._optionComponents.splice(i, 1)];
        return;
      }
    }

  }

  // ngAfterContentInit() {
  //   console.log('ngAfterContentInit');
  //   console.log(!!this.options);
  //   console.log(!!this.options.changes);
  //   this.options.changes.subscribe(opts => {
  //     console.log('new options', opts);
  //     if (!opts) {
  //       return;
  //     }
  //     opts.forEach(igniteOption => {
  //       igniteOption.optionSelected.subscribe(o => {
  //         console.log('new option... ', o);
  //         this.displayText = `${o.value} (${o.displayedValue})`;
  //       })
  //     });
  //   });
  //   // this.options.forEach(igniteOption => {
  //   //   igniteOption.optionSelected.subscribe(o => {
  //   //     this.displayText = `${o.value} (${o.displayedValue})`;
  //   //   })
  //   // });
  // }

  panelOpen = false;

  toggle() {
    this.panelOpen = !this.panelOpen;
  }
}
