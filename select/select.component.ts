import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'ng-select',
    templateUrl: 'app/select/select.component.html'
})

export class SelectComponent implements OnInit {

    @Input() values: Array<any>;
    @Input() placeholder: string;
    @Input() displayProperty: string;
    @Input() selectedValue: any;
    @Output() selectedValueChange = new EventEmitter<any>();
    placeholderItem = undefined;
    
    constructor() { }

    ngOnInit() { }

    selectedChanged(item: any) {
        this.selectedValue = item;
        this.selectedValueChange.emit(item);
    }
}