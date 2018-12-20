import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { IgnRadioButton } from "./radio-button.component";
import { MatTooltipModule, MatIconModule, MatRadioModule } from "@angular/material";

@NgModule({
  imports: [CommonModule, MatIconModule, MatTooltipModule, MatRadioModule],
  declarations: [IgnRadioButton],
  exports: [CommonModule, IgnRadioButton]
})
export class RadioButtonModule {}
