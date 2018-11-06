import {NgModule} from '@angular/core';
import {MatCardModule, MatFormFieldModule, MatInputModule} from '@angular/material';
import {IgniteCardComponent} from './card.component';
import {IgniteFieldComponent} from './field.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

@NgModule({
  imports: [MatCardModule, MatInputModule, MatFormFieldModule],
  declarations: [IgniteCardComponent, IgniteFieldComponent],
  exports: [IgniteCardComponent, IgniteFieldComponent]
})
export class FormCardModule {
}
