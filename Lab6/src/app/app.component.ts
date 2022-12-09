import { Component } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { NavController } from '@ionic/angular';
import { ApiService } from './api.service';
import { Observable } from 'rxjs/internal/Observable';


const httpOptions = {
  headers: new HttpHeaders({'Content-Type':'application.json'})
}

const apiUrl = 'https://jsonplaceholder.typicode.com/todos'


@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {

  tasks:any;

  constructor(private service:ApiService, public api: ApiService,) {
    this.service.getTask().subscribe(data => {
      this.tasks = data;
      console.log(data)
    })
  }

  ngOnInit() {
    this.api.getTask();
  }
}