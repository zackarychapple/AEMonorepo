import {NgModule} from '@angular/core';
import {IgniteTableComponent} from './table.component';
import {MatTableModule} from '@angular/material';

@NgModule({
  imports: [MatTableModule],
  declarations: [IgniteTableComponent],
  exports: [IgniteTableComponent]
})
export class TableModule {
}
