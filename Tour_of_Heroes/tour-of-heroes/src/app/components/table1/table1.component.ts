import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { MatTable } from '@angular/material/table';
import { HeroService } from 'src/app/hero.service';
import { User } from '../table/table.component';

@Component({
  selector: 'app-table1',
  templateUrl: './table1.component.html',
  styleUrls: ['./table1.component.css']
})
export class Table1Component implements OnInit {
  @ViewChild('table') table: MatTable<Element> | undefined;

  @Input('dataSource') dataSource: User[] = [{ 'userId': 111, "id": 12, 'title': 'initial data state', 'body': 'body text' }];
  displayedColumns: string[] = ['userId', 'id', 'title', 'body'];
  //dataSource: User[] = [{'userId': 111, "id": 12, 'title': 'initial data state', 'body': 'body text'}];

  constructor(private heroService: HeroService) { }

  ngOnInit(): void {

    this.heroService.getData(2)
    .subscribe(data => {
      console.log(data);
      this.dataSource = data;
      this.table?.renderRows();
    });
  }

}
