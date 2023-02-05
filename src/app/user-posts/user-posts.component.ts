import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { UserPosts } from './services/models/user-posts.models';
import { UserPostsService } from './services/user-posts.service';

@Component({
  selector: 'app-user-posts',
  templateUrl: './user-posts.component.html',
  styleUrls: ['./user-posts.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UserPostsComponent implements OnInit {
  public userPosts$: Observable<UserPosts[]> = this.userPostService.userPosts$;

  constructor(private userPostService: UserPostsService) {}

  ngOnInit() {}
}
