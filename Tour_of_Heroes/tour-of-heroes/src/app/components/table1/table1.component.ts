import { Component, OnInit } from '@angular/core';
import { HeroService } from 'src/app/hero.service';
import { User } from '../table/table.component';

@Component({
  selector: 'app-table1',
  templateUrl: './table1.component.html',
  styleUrls: ['./table1.component.css']
})
export class Table1Component implements OnInit {

  displayedColumns: string[] = ['userId', 'id', 'title', 'body'];
  dataSource: User[] = [{'userId': 111, "id": 12, 'title': 'initial data state', 'body': 'body text'}];

  constructor(private heroService: HeroService) { }

  ngOnInit(): void {

    this.heroService.getData(2)
    .subscribe(data => {
      console.log(data);
      this.dataSource = data;
      //this.table?.renderRows();
    }); 
  }

}
