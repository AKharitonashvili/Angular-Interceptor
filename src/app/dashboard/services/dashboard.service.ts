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

  public getTodos(userId: number): Observable<TodoModel[][]> {
    let headers = new Headers();
    headers.append('ignoreCache', 'true');

    return this.http
      .get<TodoModel[]>(`https://jsonplaceholder.typicode.com/todos`, {
        params: { userId },
      })
      .pipe(
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
