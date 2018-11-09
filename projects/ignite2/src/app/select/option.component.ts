import { Component, Input } from "@angular/core";

@Component({
  selector: "ignite-option",
  templateUrl: "./option.component.html",
  styles: []
})
export class IgniteOptionComponent {
  @Input() value: string;
  @Input() displayedValue: string;
  constructor() {
    console.log("Option component is being constructed");
  }
}
