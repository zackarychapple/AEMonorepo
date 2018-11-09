import { NgModule } from "@angular/core";
import {
  MatFormFieldModule,
  MatAutocompleteModule,
  MatOptionModule,
  MatInputModule,
  MatSelectModule
} from "@angular/material";
import { IgniteSelectComponent } from "./select.component";
import { IgniteOptionComponent } from "./option.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

@NgModule({
  imports: [
    MatFormFieldModule,
    MatSelectModule,
    MatOptionModule,
    MatAutocompleteModule,
    MatInputModule,
    BrowserAnimationsModule
  ],
  declarations: [IgniteSelectComponent, IgniteOptionComponent],
  exports: [IgniteSelectComponent, IgniteOptionComponent],
  providers: []
})
export class SelectModule {}
