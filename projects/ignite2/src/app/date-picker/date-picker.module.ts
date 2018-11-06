import { NgModule } from "@angular/core";
import {
  MatFormFieldModule,
  MatDatepickerModule,
  MatInputModule,
  MatNativeDateModule
} from "@angular/material";
import { IgniteDatePickerComponent } from "./date-picker.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

@NgModule({
  imports: [
    MatFormFieldModule,
    MatDatepickerModule,
    MatInputModule,
    BrowserAnimationsModule,
    MatNativeDateModule
  ],
  declarations: [IgniteDatePickerComponent],
  exports: [IgniteDatePickerComponent, MatNativeDateModule, MatDatepickerModule]
})
export class TextModule {}
