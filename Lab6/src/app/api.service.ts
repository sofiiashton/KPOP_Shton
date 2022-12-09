import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { catchError, tap, map } from 'rxjs/operators';

export interface Task {
  userId:number;
  id:number;
  title:string;
  completed:boolean;
}

const httpOptions = {
  headers: new HttpHeaders({'Content-Type':'application.json'})
}

const apiUrl = 'https://jsonplaceholder.typicode.com/todos'

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http : HttpClient) {}
      
  getTask(): Observable <Task[]>{
    return this.http.get<Task[]>(apiUrl, httpOptions)
  }
}
