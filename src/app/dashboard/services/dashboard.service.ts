import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { TodoModel } from '../models';

@Injectable({
  providedIn: 'root',
})
export class DashboardService {
  constructor(private http: HttpClient) {}

  public todos$: Observable<TodoModel[]> = this.getTodos(1);

  private setUrl(from: number, to: number = 0): string {
    let baseUrl = `https://jsonplaceholder.typicode.com/todos?userId=${from}`;
    for (let i = from + 1; i <= to; i++) {
      baseUrl += `&&userId=${i}`;
    }
    return baseUrl;
  }

  public getTodos(from: number, to: number = 0): Observable<TodoModel[]> {
    return this.http.get<TodoModel[]>(this.setUrl(from, to));
  }
}
