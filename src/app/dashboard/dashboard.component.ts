import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { map, Observable, tap } from 'rxjs';
import { TodoModel } from './models';
import { DashboardService } from './services/dashboard.service';
import * as _ from 'lodash';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DashboardComponent implements OnInit {
  public todosArray$: Observable<TodoModel[][]> = this.dashboardService.todos$.pipe(
    map((todos: TodoModel[]) => _.mapValues(_.groupBy(todos, 'userId'))),
    map((todosGrouped) => {
      const todosArray: TodoModel[][] = [];
      Object.keys(todosGrouped).forEach((i) =>
        todosArray.push(todosGrouped[i])
      );
      return todosArray;
    }),
  );

  constructor(private dashboardService: DashboardService) {}

  ngOnInit() {}
}
