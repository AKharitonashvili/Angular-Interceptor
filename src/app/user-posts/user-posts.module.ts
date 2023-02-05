import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserPostsComponent } from './user-posts.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { UserPostsService } from './services/user-posts.service';
import { CustomEnLanguageInterceptor } from '../interceptors/custom-en.interceptor';
import { RouterModule, Routes } from '@angular/router';
import { commonInterceptors } from '../app.module';

const services = [UserPostsService];
const interceptors = [
  {
    provide: HTTP_INTERCEPTORS,
    useClass: CustomEnLanguageInterceptor,
    multi: true,
  },
];

const routes: Routes = [
  {
    path: '',
    component: UserPostsComponent,
  },
];

@NgModule({
  imports: [CommonModule, HttpClientModule, RouterModule.forChild(routes)],
  declarations: [UserPostsComponent],
  providers: [...services, ...interceptors],
})
export class UserPostsModule {}
