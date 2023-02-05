import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from '../app-routing.module';
import { DashboardComponent } from './dashboard.component';
import { SelectUserIdRangeComponent } from './select-user-id-range/select-user-id-range.component';
import { DashboardService } from './services/dashboard.service';
import { MatSelectModule } from '@angular/material/select';
import { LanguageInterceptor } from '../interceptors/accept-language.interceptor';

const components = [DashboardComponent, SelectUserIdRangeComponent];
const services = [DashboardService];
const interceptors = [
  {
    provide: HTTP_INTERCEPTORS,
    useClass: LanguageInterceptor,
    multi: true,
  },
];

@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgbModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    FormsModule,
    MatSelectModule,
  ],
  declarations: [...components],
  exports: [...components],
  providers: [...services, ...interceptors],
})
export class DashboardModule {}
