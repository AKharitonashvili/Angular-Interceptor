import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Comments } from './models/comments.models';
import { CommentsServicesService } from './services/comments-services.service';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CommentsComponent implements OnInit {
  public comments$: Observable<Comments[]> = this.commentsService.comments$;

  constructor(private commentsService: CommentsServicesService) {}

  ngOnInit() {}
}
