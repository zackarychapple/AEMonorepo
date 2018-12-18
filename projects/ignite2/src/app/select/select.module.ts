import { NgModule } from '@angular/core';
import {
  OverlayModule
} from '@angular/cdk/overlay';
import { IgniteSelectComponent } from './select.component';
import { IgniteOptionComponent } from './option.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  imports: [
    BrowserAnimationsModule,
    OverlayModule
  ],
  declarations: [IgniteSelectComponent, IgniteOptionComponent],
  exports: [IgniteSelectComponent, IgniteOptionComponent],
  providers: []
})
export class SelectModule {}
