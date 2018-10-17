import {BrowserModule} from '@angular/platform-browser';
import {Injector, NgModule} from '@angular/core';
import {createCustomElement} from '@angular/elements';
import {IgniteButtonComponent} from './button/button.component';
import {IgniteTableComponent} from './table/table.component';

@NgModule({
  imports: [BrowserModule],
  declarations: [],
  bootstrap: [],
  exports: [],
  entryComponents: [
    IgniteButtonComponent,
    IgniteTableComponent
  ]
})
export class IgniteModule {
  constructor(private injector: Injector) {
  }

  ngDoBootstrap() {
    const btnComp = createCustomElement(IgniteButtonComponent, {injector: this.injector});
    const tblComp = createCustomElement(IgniteTableComponent, {injector: this.injector});
    customElements.define('ignite-button', btnComp as any);
    customElements.define('ignite-table', tblComp as any);
  }
}
