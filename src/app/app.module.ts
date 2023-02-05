import { HTTP_INTERCEPTORS } from '@angular/common/http';
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
import { DashboardModule } from './dashboard/dashboard.module';
import { NavbarModule } from './navbar/navbar.module';
import { InfoModule } from './info/info.module';
import { UserPostsModule } from './user-posts/user-posts.module';

const modules = [DashboardModule, NavbarModule, InfoModule, UserPostsModule];

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
];

@NgModule({
  imports: [BrowserModule, AppRoutingModule, ...modules],
  declarations: [AppComponent],
  providers: [...interceptors],
  bootstrap: [AppComponent],
})
export class AppModule {}
