import { NgModule } from "@angular/core";
import {
  MatFormFieldModule,
  MatOptionModule,
  MatSelectModule,
  MAT_SELECT_SCROLL_STRATEGY
} from "@angular/material";
import { Overlay, BlockScrollStrategy } from "@angular/cdk/overlay";
import { IgniteSelectComponent } from "./select.component";
import { IgniteOptionComponent } from "./option.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

export function scrollFactory(overlay: Overlay): () => BlockScrollStrategy {
  return () => overlay.scrollStrategies.block();
}

@NgModule({
  imports: [
    MatFormFieldModule,
    MatSelectModule,
    MatOptionModule,
    BrowserAnimationsModule
  ],
  declarations: [IgniteOptionComponent, IgniteSelectComponent],
  exports: [IgniteOptionComponent, IgniteSelectComponent],
  providers: [
    {
      provide: MAT_SELECT_SCROLL_STRATEGY,
      useFactory: scrollFactory,
      deps: [Overlay]
    }
  ]
})
export class SelectModule {}
