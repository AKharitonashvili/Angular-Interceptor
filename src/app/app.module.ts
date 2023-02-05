import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {
  JsessionIdInterceptor,
  LoginDurationInterceptor,
  LoginTimeInterceptor,
  TokenInterceptor,
} from './interceptors';
import { LanguageInterceptor } from './interceptors/accept-language.interceptor';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DashboardModule } from './dashboard/dashboard.module';

const modules = [DashboardModule];

const interceptors = [
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
    ...modules,
  ],
  declarations: [AppComponent],
  providers: [...interceptors],
  bootstrap: [AppComponent],
})
export class AppModule {}
