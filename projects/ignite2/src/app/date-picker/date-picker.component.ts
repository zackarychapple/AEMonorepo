import { Component, Input, OnChanges, SimpleChanges } from "@angular/core";

@Component({
  selector: "ignite-date-picker",
  templateUrl: "./date-picker.component.html",
  styles: []
})
export class IgniteDatePickerComponent implements OnChanges {
  startDate: Date;

  @Input() id: string;

  @Input() value: string;

  get userId(): string {
    return this.id + "_user";
  }

  constructor() {}

  ngOnChanges(changes: SimpleChanges) {
    console.log("Changes have been detected: ", changes);
    if (typeof changes["value"] !== "undefined") {
      this.startDate = new Date(changes["value"].currentValue);
    }
  }
}
