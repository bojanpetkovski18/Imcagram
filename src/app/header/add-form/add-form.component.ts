import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CommunicationsService } from 'src/shared/services/communications.service';
import { PostService } from 'src/shared/services/post.service';

@Component({
  selector: 'app-add-form',
  templateUrl: './add-form.component.html',
  styleUrls: ['./add-form.component.scss'],
})
export class AddFormComponent implements OnInit {
  public postForm: FormGroup;
  @Output() closeModalEvent = new EventEmitter<boolean>();
  constructor(
    private fb: FormBuilder,
    private postService: PostService,
    private commService: CommunicationsService
  ) {
    this.postForm = fb.group({
      title: ['', Validators.required],
      imgUrl: ['', Validators.required],
      description: '',
      likes: 0,
    });
  }

  ngOnInit() {}

  get title() {
    return this.postForm.get('title');
  }

  get imgUrl() {
    return this.postForm.get('imgUrl');
  }

  get desc() {
    return this.postForm.get('description');
  }

  public onClose() {
    this.title.reset();
    this.imgUrl.reset();
    this.desc.reset();
  }

  public onCloseModal(event: any) {
    this.postService.createPost(this.postForm.value).subscribe(() => {
      this.onClose();
      this.commService.deliver(true);
      this.closeModalEvent.emit(false);
    });
  }
}
