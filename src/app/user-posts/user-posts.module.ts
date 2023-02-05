import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserPostsComponent } from './user-posts.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { UserPostsService } from './services/user-posts.service';
import { RouterModule, Routes } from '@angular/router';
import { commonInterceptors } from '../app.module';
import { CustomEnLanguageInterceptor } from '../interceptors';

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

const modules = [CommonModule, RouterModule.forChild(routes)];

@NgModule({
  imports: [HttpClientModule, ...modules],
  declarations: [UserPostsComponent],
  providers: [...services, ...interceptors],
})
export class UserPostsModule {}
