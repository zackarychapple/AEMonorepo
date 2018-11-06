import { Component, Input } from "@angular/core";

@Component({
  selector: "ignite-text-box",
  templateUrl: "./text.component.html",
  styles: []
})
export class IgniteTextBoxComponent {
  @Input() value: string;
  @Input() name: string;
  @Input() id: string;
  @Input() multiline: boolean;
  constructor() {}
}
