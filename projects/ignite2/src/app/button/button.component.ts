import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'ignite-button',
  template: `
    <button mat-raised-button color="primary" [type]="buttonType" (click)="myEvent()"><ng-content></ng-content></button>
  `,
  styles: []
})
export class IgniteButtonComponent {

  @Input()
  buttonType = 'Default';

  @Output()
  custom: EventEmitter<any> = new EventEmitter();

  myEvent() {
    this.custom.emit('omg this is awesome');
  }

  constructor() {
  }

}
