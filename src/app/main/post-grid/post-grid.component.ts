import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Post } from 'src/shared/interfaces/post';
import { PostService } from 'src/shared/services/post.service';

@Component({
  selector: 'app-post-grid',
  templateUrl: './post-grid.component.html',
  styleUrls: ['./post-grid.component.scss'],
})
export class PostGridComponent implements OnInit {
  public imgPath: string = '../../../assets/images/';
  @Input() post: Post;
  constructor(private router: Router, private postService: PostService) {}

  ngOnInit() {}

  onDetails(id: number) {
    this.router.navigate(['posts', id]);
  }

  updateLikes(editPost: Post) {
    editPost.likes = this.post.likes + 1;
    this.postService.updatePost(editPost).subscribe(() => {});
  }
}
