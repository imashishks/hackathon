import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'hack-table-list',
  templateUrl: './table-list.component.html',
  styleUrls: ['./table-list.component.scss'],
})
export class TableListComponent implements OnInit {
  constructor() {}
  leadersBoardData = [
    {
      name: 'Ashish Kumar',
      score: 56,
      rank: 6,
    },
    {
      name: 'Ashok Mandal',
      score: 66,
      rank: 3,
    },
    {
      name: 'Ankit Kumar',
      score: 76,
      rank: 2,
    },
  ];
  @Input('columns') columns: Array<{ key: string; value: string }>;
  @Input('data') dataSource: Array<{}>;
  displayedColumns: string[];
  dataSourceLength = this.leadersBoardData.length;
  ngOnInit(): void {
    console.log(this.dataSource, this.columns);
  }
  getDisplayColumns() {
    return this.columns.map((data) => {
      return data.key;
    });
  }
}
