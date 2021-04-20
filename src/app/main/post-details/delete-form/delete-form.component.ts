import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Post } from 'src/shared/interfaces/post';
import { PostService } from 'src/shared/services/post.service';

@Component({
  selector: 'app-delete-form',
  templateUrl: './delete-form.component.html',
  styleUrls: ['./delete-form.component.scss'],
})
export class DeleteFormComponent implements OnInit {
  @Input() deletePost: Post;

  constructor(private router: Router, private service: PostService) {}

  ngOnInit() {}

  onDelete(id: number) {
    this.router.navigate(['/']);
    this.service.deletePost(id).subscribe();
  }
}
