import {Component, OnInit, ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'ignite-card',
  template: `
    <mat-card>
      <ng-content></ng-content>
    </mat-card>
  `,
  styles: [],
  encapsulation: ViewEncapsulation.None
})
export class IgniteCardComponent implements OnInit {
  constructor() { }

  ngOnInit() {
  }
}
