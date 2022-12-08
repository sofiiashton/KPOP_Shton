import { WebService } from './web.service';
import { AfterViewInit, Component, Inject, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Post } from './web.service';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';

@Component ({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
     
  title = 'lab5';

  listPosts:Post[] = []
  displayedColumns: string[] = ['title', 'body', 'actions'];

  dataSource: any

@ViewChild(MatPaginator) paginator: MatPaginator;

constructor(private web:WebService, private dialog: MatDialog) {
  this.web.getPost().subscribe(data => {
    this.listPosts = data;
    this.dataSource = new MatTableDataSource(this.listPosts)
    this.dataSource.paginator = this.paginator
    console.log(this.listPosts);
  })
}

openDialog(row) {
  this.dialog.open(ExampleDialog, {
    width: '500px',
    data: row
  })
}
}

@Component({
  selector: "example-dialog",
  template: `
            <p>userId: {{ngOnInit().userId}}</p>
            <p>Id: {{ngOnInit().id}}</p>
            <p>Title: {{ngOnInit().title}}</p>
            <p>Body: {{ngOnInit().body}}</p>`,
  styleUrls: ['./app.component.css']
})
export class ExampleDialog {
  constructor(
    private dialogRef: MatDialogRef<ExampleDialog>,
    @Inject(MAT_DIALOG_DATA) private data: any)
  { }

  ngOnInit() {
    return this.data
  }

  onCloseClick(): void {
    this.dialogRef.close();
  }
}