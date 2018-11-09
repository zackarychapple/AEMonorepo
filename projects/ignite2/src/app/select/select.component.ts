import {
  Component,
  Input,
  ContentChildren,
  QueryList,
  AfterContentInit,
  ViewEncapsulation
} from "@angular/core";
import { IgniteOptionComponent } from "./option.component";

interface Option {
  value: string;
  displayedValue: string;
}

@Component({
  selector: "ignite-select",
  templateUrl: "./select.component.html",
  styles: [],
  encapsulation: ViewEncapsulation.None
})
export class IgniteSelectComponent implements AfterContentInit {
  @Input() placeholder: string;

  @ContentChildren(IgniteOptionComponent)
  childOptions: QueryList<IgniteOptionComponent>;

  optionsCache: Option[];

  get hasOptions(): boolean {
    return this.optionsCache && this.optionsCache.length > 0;
  }

  get options(): Option[] {
    return this.optionsCache;
  }

  constructor() {}

  ngAfterContentInit() {
    console.log("Child options: ", this.childOptions);
    if (
      !this.optionsCache &&
      this.childOptions &&
      this.childOptions.length > 0
    ) {
      this.optionsCache = this.childOptions.map(
        ({ value, displayedValue }) => ({ value, displayedValue })
      );
    }

    this.childOptions.changes.subscribe(console.log);

    console.log("Items cache has: ", this.optionsCache);
  }

  openedChange(opened: boolean) {
    console.log("Open is switching: ", opened);
  }

  dataChange(event: any) {
    console.log("Data has changed: ", event);
  }
}
