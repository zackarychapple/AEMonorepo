import { Component, Input, OnInit, Output, EventEmitter } from "@angular/core";
import { MatRadioChange } from "@angular/material";

@Component({
  selector: "ign-radio",
  templateUrl: "./radio-button.component.html",
  styleUrls: ["./radio-button.component.scss"]
})
export class IgnRadioButton implements OnInit {
  @Input()
  ignItems: string[];

  @Output()
  igniteChange: EventEmitter<MatRadioChange> = new EventEmitter<
    MatRadioChange
  >();

  ngOnInit(): void {}
}
