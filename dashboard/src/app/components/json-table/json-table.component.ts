import { Component, OnInit } from '@angular/core';
import { Sort } from '@angular/material/sort';
import { JsonTableService } from 'src/app/services/json-table.service';

@Component({
  selector: 'app-json-table',
  templateUrl: './json-table.component.html',
  styleUrls: ['./json-table.component.scss']
})
export class JsonTableComponent implements OnInit {
  displayedColumns: string[] = ['id', 'content', 'type', 'image', 'created', 'updated'];
  dataSource: any;
  sortedData: any;
  unfilteredData:any;

  constructor(private jsonService: JsonTableService) { }

  ngOnInit(): void {
    this.jsonService.getJsonData().subscribe(data => {
      this.dataSource = data.data;
      this.sortedData = this.dataSource.slice();
    });
  }

  applyFilter(event: any) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.unfilteredData = JSON.parse(JSON.stringify(this.dataSource));
    this.unfilteredData = this.unfilteredData.filter((element: any) => {

      return  element.id.includes(filterValue) ||
      element.attributes.content.includes(filterValue) ||
      element.attributes.display_properties.type.includes(filterValue) ||
      element.attributes.display_properties.image.includes(filterValue) ||
      element.attributes.display_properties.image.includes(filterValue) ||
      element.attributes.updated_at.includes(filterValue);
    });
    this.sortedData = JSON.parse(JSON.stringify(this.unfilteredData));
  }

  sortData(sort: Sort) {
    const data = this.dataSource.slice();
    if (!sort.active || sort.direction === '') {
      this.sortedData = data;
      return;
    }

    this.sortedData = data.sort((a: any, b: any) => {
      const isAsc = sort.direction === 'asc';
      switch (sort.active) {
        case 'id':
          return this.compare(a.id, b.id, isAsc);
        case 'content':
          return this.compare(a.attributes.content, b.attributes.content, isAsc);
        case 'type':
          return this.compare(a.attributes.display_properties.type, b.attributes.display_properties.type, isAsc);
        case 'image':
          return this.compare(a.attributes.display_properties.image, b.attributes.display_properties.image, isAsc);
        case 'created':
          return this.compare(a.attributes.created, b.attributes.created, isAsc);
        case 'updated':
          return this.compare(a.attributes.created, b.attributes.updated, isAsc);
        default:
          return 0;
      }
    });
    this.dataSource = JSON.parse(JSON.stringify(this.sortedData));
  }

  private compare(a: any, b: any, isAsc: boolean) {
    return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
  }
}
