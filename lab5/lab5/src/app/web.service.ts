import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

export interface Post {
    userId:number,
    id:number,
    title:string,
    body:string
}

@Injectable ({
    providedIn: 'root'
})
export class WebService {
    apiUrl = 'http://jsonplaceholder.typicode.com/posts'

    constructor(private http : HttpClient) {}

    getPost(): Observable <Post[]>{
        return this.http.get<Post[]>(this.apiUrl)
    }
}