import { Component, OnInit } from '@angular/core';
import { Post } from 'src/shared/interfaces/post';
import { CommunicationsService } from 'src/shared/services/communications.service';
import { PostService } from 'src/shared/services/post.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
})
export class MainComponent implements OnInit {
  public imgPath: string = '../../assets/images/';
  public listPosts: Post[] = [];

  constructor(
    private postService: PostService,
    private commService: CommunicationsService
  ) {}

  ngOnInit() {
    this.getPosts();
    this.commService.recieve().subscribe((result) => this.getPosts());
  }
  public getPosts() {
    setTimeout(() => {
      this.postService.getPosts().subscribe((result) => {
        this.listPosts = result;
        console.log(this.listPosts.length);
      });
    }, 350);
  }
}
