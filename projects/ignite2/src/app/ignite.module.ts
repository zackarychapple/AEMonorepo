import { BrowserModule } from "@angular/platform-browser";
import { Injector, NgModule } from "@angular/core";
import { createCustomElement } from "@angular/elements";
import {
  MAT_AUTOCOMPLETE_SCROLL_STRATEGY,
  MAT_SELECT_SCROLL_STRATEGY,
  MatDatepickerModule,
  MatNativeDateModule,
  MatOption,
  MatOptionModule,
  MatSelect,
  MatSelectModule
} from "@angular/material";
import { IgniteButtonComponent } from "./button/button.component";
import { IgniteTableComponent } from "./table/table.component";
import { IgniteCardComponent } from "./form-card/card.component";
import { IgniteFieldComponent } from "./form-card/field.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { IgniteSelectComponent } from "@ignite/src/app/select/select.component";
import { IgnRadioButton } from "@ignite/src/app/radio/radio-button.component";
import { IgniteOptionComponent } from "@ignite/src/app/select/option.component";
import { IgniteTextBoxComponent } from "@ignite/src/app/text/text.component";
import { IgniteDatePickerComponent } from "@ignite/src/app/date-picker/date-picker.component";
import { Overlay, ScrollStrategy } from "@angular/cdk/overlay";

export function scrollFactory(overlay: Overlay): () => ScrollStrategy {
  return () => overlay.scrollStrategies.noop();
}

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatSelectModule,
    MatOptionModule,
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
    IgnRadioButton,
    IgniteOptionComponent,
    IgniteDatePickerComponent,
    MatOption,
    MatSelect
  ],
  providers: [
    {
      provide: MAT_SELECT_SCROLL_STRATEGY,
      useFactory: scrollFactory,
      deps: [Overlay]
    },
    {
      provide: MAT_AUTOCOMPLETE_SCROLL_STRATEGY,
      useFactory: scrollFactory,
      deps: [Overlay]
    }
  ]
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
    const radioComp = createCustomElement(IgnRadioButton, {
      injector: this.injector
    });
    const optionComp = createCustomElement(IgniteOptionComponent, {
      injector: this.injector
    });
    const dateComp = createCustomElement(IgniteDatePickerComponent, {
      injector: this.injector
    });
    const matOptionComp = createCustomElement(MatOption, {
      injector: this.injector
    });

    customElements.define("ignite-button", btnComp as any);
    customElements.define("ignite-table", tblComp as any);
    customElements.define("ignite-card", cardComp as any);
    customElements.define("ignite-field", formComp as any);
    customElements.define("ignite-text-box", textComp as any);
    customElements.define("ignite-select", selectComp as any);
    customElements.define("ignite-radio", radioComp as any);
    customElements.define("ignite-option", optionComp as any);
    customElements.define("ignite-date-picker", dateComp as any);
    customElements.define("mat-option", matOptionComp as any);
  }
}
