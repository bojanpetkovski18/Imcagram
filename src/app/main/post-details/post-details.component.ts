import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Post } from 'src/shared/interfaces/post';
import { PostService } from 'src/shared/services/post.service';

@Component({
  selector: 'app-post-details',
  templateUrl: './post-details.component.html',
  styleUrls: ['./post-details.component.scss'],
})
export class PostDetailsComponent implements OnInit {
  public post: Post;
  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private service: PostService
  ) {}

  ngOnInit() {
    let id = +this.route.snapshot.params['id'];
    this.reloadPage(id);
  }

  getPost(id: number) {
    this.service.getPost(id).subscribe((result) => {
      this.post = result;
      console.log(this.post);
    });
  }

  onDelete(deletePost: Post) {
    if (confirm('Are you sure to delete ' + deletePost.title + '?')) {
      this.onBack();
      this.service.deletePost(+deletePost.id).subscribe();
    }
  }

  reloadPage(id: number) {
    this.getPost(id);
  }

  onBack() {
    this.location.back();
  }
}
