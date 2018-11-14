import {Component, EventEmitter, Input, OnInit, Output, ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'ignite-button',
  template: `
    <button (click)="onQuack.emit($event)" [disabled]="disabled" mat-raised-button color="primary"> {{ buttonLabel }} </button>
  `,
  styles: [],
  encapsulation: ViewEncapsulation.None
})
export class IgniteButtonComponent implements OnInit {
  @Input() buttonLabel: string;
  @Input() disabled: boolean;
  @Output() onQuack = new EventEmitter<any>();
  constructor() { }

  ngOnInit() {
  }

}
