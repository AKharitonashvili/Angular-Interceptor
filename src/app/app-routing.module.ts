import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: '/Home', pathMatch: 'full' },
  {
    path: 'Posts',
    loadChildren: () =>
      import('./user-posts/user-posts.module').then((m) => m.UserPostsModule),
  },
  {
    path: 'Comments',
    loadChildren: () =>
      import('./comments/comments.module').then((m) => m.CommentsModule),
  },
  {
    path: 'Home',
    loadChildren: () =>
      import('./dashboard/dashboard.module').then((m) => m.DashboardModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
