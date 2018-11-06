import {NgModule} from '@angular/core';
import {MatFormFieldModule, MatSelectModule} from '@angular/material';
import {IgniteSelectComponent} from './select.component';
import {IgniteOptionComponent} from './option.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

@NgModule({
  imports: [MatFormFieldModule, MatSelectModule, BrowserAnimationsModule],
  declarations: [IgniteOptionComponent, IgniteSelectComponent],
  exports: [IgniteOptionComponent, IgniteSelectComponent]
})
export class SelectModule {
}
