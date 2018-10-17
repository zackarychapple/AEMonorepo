import {NgModule} from '@angular/core';
import {MatButtonModule} from '@angular/material';
import {IgniteButtonComponent} from './button.component';

@NgModule({
  imports: [MatButtonModule],
  declarations: [IgniteButtonComponent],
  exports: [IgniteButtonComponent]
})
export class ButtonModule {
}
