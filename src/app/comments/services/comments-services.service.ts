import { HttpBackend, HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Comments } from '../models/comments.models';

@Injectable({
  providedIn: 'root',
})
export class CommentsServicesService {
  public comments$: Observable<Comments[]>;

  constructor(private http: HttpClient) {
    // this.http = new HttpClient(handler);
    this.comments$ = this.http.get<Comments[]>(
      `https://jsonplaceholder.typicode.com/comments`
    );
  }
}
