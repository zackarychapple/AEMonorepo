import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ignite-button',
  template: `
    <button mat-raised-button color="primary"> OMG </button>
  `,
  styles: []
})
export class IgniteButtonComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
