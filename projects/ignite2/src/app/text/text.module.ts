import { NgModule } from "@angular/core";
import { MatFormFieldModule, MatInputModule } from "@angular/material";
import { IgniteTextBoxComponent } from "./text.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

@NgModule({
  imports: [MatFormFieldModule, MatInputModule, BrowserAnimationsModule],
  declarations: [IgniteTextBoxComponent],
  exports: [IgniteTextBoxComponent]
})
export class TextModule {}
