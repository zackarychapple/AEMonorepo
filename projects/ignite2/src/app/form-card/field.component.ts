import {Component, Input, OnInit, ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'ignite-field',
  template: `
    <mat-form-field>
      <input matInput [placeholder]="placeholder">
    </mat-form-field>
  `,
  styles: [],
  encapsulation: ViewEncapsulation.Native
})
export class IgniteFieldComponent implements OnInit {
  @Input() placeholder: string;
  constructor() { }

  ngOnInit() {
  }
}
