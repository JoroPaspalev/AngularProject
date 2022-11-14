import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { MatTable } from '@angular/material/table';
import { combineLatest } from 'rxjs';
import { HeroService } from 'src/app/hero.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
  @ViewChild('table') table: MatTable<Element> | undefined;
  // Ще получа тези данни от Parent-a, когато той полечи нови данни в Subscribe-a
  @Input('dataSource') dataSource: User[] = [{ 'userId': 111, "id": 12, 'title': 'initial data state', 'body': 'body text' }];

  displayedColumns: string[] = ['userId', 'id', 'title', 'body'];
  //dataSource: User[] = [{'userId': 111, "id": 12, 'title': 'initial data state', 'body': 'body text'}];

  constructor(private heroService: HeroService){
  }

  ngOnInit(): void {

    // combineLatest(this.heroService.getData(3))
    // .subscribe(([response1]) => {
    //     this.dataSource = response1;
    // })

    this.heroService.getData(3)
    .subscribe(data => {
      console.log(data);
      this.dataSource = data;
      this.table?.renderRows();
    });
  }


  public reloadData() {
    console.log('btn changed');
    this.heroService.getData(1)
      .subscribe(response => {
        console.log(response)
        this.dataSource = response;
        //this.table?.renderRows();
      });
  }
}


export interface User{
  "userId": number,
  "id": number,
  "title": string,
  "body": string
}
