import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DashboardService } from './dashboard/services/dashboard.service';
import {
  JsessionIdInterceptor,
  LoginDurationInterceptor,
  LoginTimeInterceptor,
  TokenInterceptor,
} from './interceptor';

@NgModule({
  declarations: [AppComponent, DashboardComponent],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [
    DashboardService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true,
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: JsessionIdInterceptor,
      multi: true,
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: LoginTimeInterceptor,
      multi: true,
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: LoginDurationInterceptor,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
