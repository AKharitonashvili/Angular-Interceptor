import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { DashboardComponent } from './dashboard.component';
import { SelectUserIdRangeComponent } from './select-user-id-range/select-user-id-range.component';
import { DashboardService } from './services/dashboard.service';
import { MatSelectModule } from '@angular/material/select';
import { LanguageInterceptor } from '../interceptors/accept-language.interceptor';
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

const components = [DashboardComponent, SelectUserIdRangeComponent];
const services = [DashboardService];
const interceptors = [
  {
    provide: HTTP_INTERCEPTORS,
    useClass: LanguageInterceptor,
    multi: true,
  },
];

const modules = [CommonModule, ReactiveFormsModule, MatSelectModule];

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
  },
];

@NgModule({
  imports: [...modules, RouterModule.forChild(routes)],
  declarations: [...components],
  providers: [...services, ...interceptors],
})
export class DashboardModule {}
