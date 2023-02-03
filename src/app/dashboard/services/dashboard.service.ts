import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { TodoModel } from '../models';

@Injectable({
  providedIn: 'root',
})
export class DashboardService {
  constructor(private http: HttpClient) {}

  public todos$: Observable<TodoModel[]> = this.http.get<TodoModel[]>(
    'https://jsonplaceholder.typicode.com/todos'
  );
}
