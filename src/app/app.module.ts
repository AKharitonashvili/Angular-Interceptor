import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {
  JsessionIdInterceptor,
  LoginDurationInterceptor,
  LoginTimeInterceptor,
  TokenInterceptor,
  LanguageInterceptor,
  CacheInterceptor,
} from './interceptors';
import { NavbarModule } from './navbar/navbar.module';

const modules = [
  BrowserModule,
  AppRoutingModule,
  NavbarModule,
  BrowserAnimationsModule,
  HttpClientModule,
];

export const commonInterceptors = [
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
  // {
  //   provide: HTTP_INTERCEPTORS,
  //   useClass: LoginDurationInterceptor,
  //   multi: true,
  // },
  {
    provide: HTTP_INTERCEPTORS,
    useClass: LanguageInterceptor,
    multi: true,
  },
  {
    provide: HTTP_INTERCEPTORS,
    useClass: CacheInterceptor,
    multi: true,
  },
];

@NgModule({
  imports: [...modules],
  declarations: [AppComponent],
  providers: [...commonInterceptors],
  bootstrap: [AppComponent],
})
export class AppModule {}
