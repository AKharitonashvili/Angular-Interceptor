import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CommentsComponent } from './comments.component';
import { CommentsServicesService } from './services/comments-services.service';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { CustomEnLanguageInterceptor } from '../interceptors/custom-en.interceptor';
import { commonInterceptors } from '../app.module';

const services = [CommentsServicesService];

const routes: Routes = [
  {
    path: '',
    component: CommentsComponent,
  },
];

const interceptors = [
  {
    provide: HTTP_INTERCEPTORS,
    useClass: CustomEnLanguageInterceptor,
    multi: true,
  },
];

const modules = [CommonModule, RouterModule.forChild(routes)];

@NgModule({
  imports: [HttpClientModule, ...modules],
  declarations: [CommentsComponent],
  providers: [...services, ...commonInterceptors, ...interceptors],
})
export class CommentsModule {}
