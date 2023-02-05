import { HttpBackend, HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UserPosts } from './models/user-posts.models';

@Injectable({
  providedIn: 'root',
})
export class UserPostsService {
  // private http: HttpClient;

  public userPosts$: Observable<UserPosts[]>;

  constructor(
    private handler: HttpBackend,
    private http:HttpClient
  ) {
    // this.http = new HttpClient(handler);
    this.userPosts$ = this.http.get<UserPosts[]>(
      `https://jsonplaceholder.typicode.com/posts`
    );
  }
}
