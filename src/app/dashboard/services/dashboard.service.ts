import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { TodoModel } from '../models';
import * as _ from 'lodash';

@Injectable({
  providedIn: 'root',
})
export class DashboardService {
  constructor(private http: HttpClient) {}

  private setUrl(from: number, to: number = 0): string {
    let baseUrl = `https://jsonplaceholder.typicode.com/todos?userId=${from}`;
    for (let i = from + 1; i <= to; i++) {
      baseUrl += `&&userId=${i}`;
    }
    return baseUrl;
  }

  public getTodos(from: number, to: number = 0): Observable<TodoModel[][]> {
    return this.http.get<TodoModel[]>(this.setUrl(from, to)).pipe(
      map((todos: TodoModel[]) => _.mapValues(_.groupBy(todos, 'userId'))),
      map((todosGrouped) => {
        const todosArray: TodoModel[][] = [];
        Object.keys(todosGrouped).forEach((i) =>
          todosArray.push(todosGrouped[i])
        );
        return todosArray;
      })
    );
  }
}
