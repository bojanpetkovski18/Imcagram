import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Post } from 'src/shared/interfaces/post';
import { CommunicationsService } from 'src/shared/services/communications.service';
import { PostService } from 'src/shared/services/post.service';

@Component({
  selector: 'app-edit-form',
  templateUrl: './edit-form.component.html',
  styleUrls: ['./edit-form.component.scss'],
})
export class EditFormComponent implements OnInit {
  @Input() public editPost: Post;
  @Output() public status = new EventEmitter();
  public currentPost: Post;
  constructor(private postService: PostService) {}

  public onEdit(editForm: Post) {
    this.postService.updatePost(editForm).subscribe((res) => {
      this.status.emit(editForm.id);
    });
  }

  ngOnInit() {
    this.currentPost = {
      id: this.editPost.id,
      title: this.editPost.title,
      imgUrl: this.editPost.imgUrl,
      description: this.editPost.description,
      likes: this.editPost.likes,
    };
  }
}
