import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { map, Observable, tap } from 'rxjs';
import { TodoModel } from './models';
import { DashboardService } from './services/dashboard.service';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DashboardComponent implements OnInit {
  public todosArray$: Observable<TodoModel[][]> =
    this.dashboardService.getTodos(1);

  public form: FormGroup = this.fb.group({
    from: new FormControl(null),
    to: new FormControl(null),
  });

  constructor(
    private dashboardService: DashboardService,
    private fb: FormBuilder
  ) {}

  ngOnInit() {}

  public changeRange(): void {
    console.log(this.form.value)
    this.todosArray$ = this.dashboardService.getTodos(
      this.form.value.from,
      this.form.value.to
    );
  }
}
