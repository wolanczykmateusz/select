import { NgModule } from '@angular/core';
import { SelectComponent } from "./select.component";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";

@NgModule({
    imports: [CommonModule, FormsModule],
    exports: [SelectComponent],
    declarations: [SelectComponent],
    providers: [],
})
export class SelectModule { }
