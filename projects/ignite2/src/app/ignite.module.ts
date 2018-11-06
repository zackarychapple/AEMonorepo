import { BrowserModule } from "@angular/platform-browser";
import { Injector, NgModule } from "@angular/core";
import { createCustomElement } from "@angular/elements";
import { MatNativeDateModule, MatDatepickerModule } from "@angular/material";
import { NativeDateAdapter, DateAdapter } from "@angular/material/core";
import { IgniteButtonComponent } from "./button/button.component";
import { IgniteTableComponent } from "./table/table.component";
import { IgniteCardComponent } from "./form-card/card.component";
import { IgniteFieldComponent } from "./form-card/field.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { IgniteSelectComponent } from "@ignite/src/app/select/select.component";
import { IgniteOptionComponent } from "@ignite/src/app/select/option.component";
import { IgniteTextBoxComponent } from "@ignite/src/app/text/text.component";
import { IgniteDatePickerComponent } from "@ignite/src/app/date-picker/date-picker.component";

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatNativeDateModule,
    MatDatepickerModule
  ],
  declarations: [],
  bootstrap: [],
  exports: [],
  entryComponents: [
    IgniteButtonComponent,
    IgniteCardComponent,
    IgniteFieldComponent,
    IgniteTableComponent,
    IgniteTextBoxComponent,
    IgniteSelectComponent,
    IgniteOptionComponent,
    IgniteDatePickerComponent
  ],
  providers: []
})
export class IgniteModule {
  constructor(private injector: Injector) {}

  ngDoBootstrap() {
    const btnComp = createCustomElement(IgniteButtonComponent, {
      injector: this.injector
    });
    const tblComp = createCustomElement(IgniteTableComponent, {
      injector: this.injector
    });
    const cardComp = createCustomElement(IgniteCardComponent, {
      injector: this.injector
    });
    const formComp = createCustomElement(IgniteFieldComponent, {
      injector: this.injector
    });
    const textComp = createCustomElement(IgniteTextBoxComponent, {
      injector: this.injector
    });
    const selectComp = createCustomElement(IgniteSelectComponent, {
      injector: this.injector
    });
    const optionComp = createCustomElement(IgniteOptionComponent, {
      injector: this.injector
    });
    const dateComp = createCustomElement(IgniteDatePickerComponent, {
      injector: this.injector
    });
    customElements.define("ignite-button", btnComp as any);
    customElements.define("ignite-table", tblComp as any);
    customElements.define("ignite-card", cardComp as any);
    customElements.define("ignite-field", formComp as any);
    customElements.define("ignite-text-box", textComp as any);
    customElements.define("ignite-select", selectComp as any);
    customElements.define("ignite-option", optionComp as any);
    customElements.define("ignite-date-picker", dateComp as any);
  }
}
