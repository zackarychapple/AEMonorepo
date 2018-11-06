import {BrowserModule} from '@angular/platform-browser';
import {Injector, NgModule} from '@angular/core';
import {createCustomElement} from '@angular/elements';
import {IgniteButtonComponent} from './button/button.component';
import {IgniteTableComponent} from './table/table.component';
import {IgniteCardComponent} from './form-card/card.component';
import {IgniteFieldComponent} from './form-card/field.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {IgniteSelectComponent} from '@ignite/src/app/select/select.component';
import {IgniteOptionComponent} from '@ignite/src/app/select/option.component';

@NgModule({
  imports: [BrowserModule, BrowserAnimationsModule],
  declarations: [],
  bootstrap: [],
  exports: [],
  entryComponents: [
    IgniteButtonComponent,
    IgniteCardComponent,
    IgniteFieldComponent,
    IgniteTableComponent
  ]
})
export class IgniteModule {
  constructor(private injector: Injector) {
  }

  ngDoBootstrap() {
    const btnComp = createCustomElement(IgniteButtonComponent, {injector: this.injector});
    const tblComp = createCustomElement(IgniteTableComponent, {injector: this.injector});
    const cardComp = createCustomElement(IgniteCardComponent, {injector: this.injector});
    const formComp = createCustomElement(IgniteFieldComponent, {injector: this.injector});
    // const selectComp = createCustomElement(IgniteSelectComponent, {injector: this.injector});
    // const optionComp = createCustomElement(IgniteOptionComponent, {injector: this.injector});
    customElements.define('ignite-button', btnComp as any);
    customElements.define('ignite-table', tblComp as any);
    customElements.define('ignite-card', cardComp as any);
    customElements.define('ignite-field', formComp as any);
    // customElements.define('ignite-select', selectComp as any);
    // customElements.define('ignite-option', optionComp as any);
  }
}
