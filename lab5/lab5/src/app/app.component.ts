import { WebService } from './web.service';
import { AfterViewInit, Component, Inject, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Post } from './web.service';
import { AnimateTimings } from '@angular/animations';
import { animate, state, style, transition, trigger } from '@angular/animations';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';

import { ExampleDialogComponent } from './example-dialog.component';

@Component ({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({ height: '0px', minHeight: '0', visibility: 'hidden' })),
      state('expanded', style({ height: '*', visibility: 'visible' })),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ]
})

export class AppComponent {
     
  title = 'lab5';

  listPosts:Post[] = []
  displayedColumns: string[] = ['userId', 'id', 'title', 'body'];

  dataSource: any

@ViewChild(MatPaginator) paginator: MatPaginator;

constructor(private web:WebService) {
  this.web.getPost().subscribe(data => {
    this.listPosts = data;
    this.dataSource = new MatTableDataSource(this.listPosts)
    this.dataSource.paginator = this.paginator
    console.log(this.listPosts);
  })
}

clickedRows = new Set<Post>();

}