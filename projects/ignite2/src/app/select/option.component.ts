import { Component, Input, Output, EventEmitter, AfterViewInit, ElementRef, OnInit, OnDestroy, ViewEncapsulation } from '@angular/core';
import { Subject } from 'rxjs';
import { SelectService } from './select.service';

@Component({
  selector: 'ignite-option',
  templateUrl: './option.component.html',
  styles: [],
  encapsulation: ViewEncapsulation.ShadowDom,
  host: {
    '(click)': 'selectOption()'
  }
})
export class IgniteOptionComponent implements OnInit, OnDestroy {
  @Input() value: string;
  @Input() display: string;
  optionSelected = new Subject<any>();
  constructor(private elementRef: ElementRef, private selectService: SelectService) {
    // console.log('Option component is being constructed');
    // console.log(elementRef);
  }

  ngOnInit() {
    // console.log(`creating option... value: ${this.value} - ${this.elementRef.nativeElement.outerHTML}`)
    console.log(`creating option...`);
    console.log(`value: ${this.value}`);
    console.log(`display: ${this.display}`);
    // console.log(`mark it up: ${this.elementRef.nativeElement.outerHTML}`);
  }
  ngAfterContentInit() {
    // console.log(`mark it up!: ${this.elementRef.nativeElement.outerHTML}`);
  }

  selectOption() {
    console.log(`Selecting - "${this.value}"`);
    // this.optionSelected.next(opt);
    this.selectService.selectItem(this.getSelectId(), this.value);
  }

  private getSelectId(): string {
    // todo - implement climbing the DOM tree to get the parent's select ID
    // this will allow handling of multiple select's
    return 'foo';
  }

  ngOnDestroy() {
    console.error('option killed');
  }
}
