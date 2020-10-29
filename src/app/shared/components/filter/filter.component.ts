import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'hack-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss'],
})
export class FilterComponent implements OnInit {
  @Input('data') filterData: any;
  @Output('getSelectedFilter') selectedFilter = new EventEmitter<any>();
  selectedFilters = [];
  selectedFilterTypes: any;
  constructor() {}
  ngOnInit(): void {
    console.log(this.filterData);
    this.selectedFilterTypes = {};
    this.filterData.data = this.filterData.data.map((filter) => {
      return { ...filter, ...{ active: false } };
    });
  }

  itemClicked(element, filterData) {
    switch (filterData.type) {
      case 'radio':
        this.selectedFilters = [element];
        break;
      case 'checkbox':
        const filteredItem = this.selectedFilters.filter((filter) => {
          return filter.value === element.value;
        });
        if (!filteredItem.length) {
          this.selectedFilters.push(element);
        } else {
          this.selectedFilters = this.selectedFilters.filter((filter) => {
            return filter.value !== element.value;
          });
        }
        break;
    }

    this.selectedFilterTypes[filterData.title] = this.selectedFilters;

    this.selectedFilter.emit(this.selectedFilters);
  }
}
