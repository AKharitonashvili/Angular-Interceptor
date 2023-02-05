import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserPostsComponent } from './user-posts.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { UserPostsService } from './services/user-posts.service';
import { CustomEnLanguageInterceptor } from '../interceptors/custom-en.interceptor';

const services = [UserPostsService];
const interceptors = [
  {
    provide: HTTP_INTERCEPTORS,
    useClass: CustomEnLanguageInterceptor,
    multi: true,
  },
];

@NgModule({
  imports: [CommonModule, HttpClientModule],
  declarations: [UserPostsComponent],
  providers: [...services, interceptors],
})
export class UserPostsModule {}
