import {Component, EventEmitter, HostListener, OnInit, Output} from '@angular/core';

@Component({
  selector: 'ignite-button',
  template: `
    <button mat-raised-button color="primary" (click)="myEvent()"> OMG</button>
  `,
  styles: []
})
export class IgniteButtonComponent implements OnInit {

  @Output()
  custom: EventEmitter<any> = new EventEmitter();

  @HostListener('click', ['$event'])
  onClick(e) {
    this.myEvent();
  }

  myEvent() {
    this.custom.emit('omg this is awesome');
    console.log('event called');
  }

  constructor() {
    console.log('here');
  }

  ngOnInit() {
  }

}
