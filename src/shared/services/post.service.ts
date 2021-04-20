import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Post } from '../interfaces/post';

const HeaderOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
};

@Injectable({
  providedIn: 'root',
})
export class PostService {
  private path = 'http://localhost:3000/Posts';

  constructor(private http: HttpClient) {}

  public getPosts(): Observable<Post[]> {
    return this.http.get<Post[]>(this.path, HeaderOptions);
  }

  public getPost(id: number): Observable<Post> {
    return this.http.get<Post>(this.path + '/' + id, HeaderOptions);
  }

  public createPost(post: Post): Observable<Post> {
    return this.http.post<Post>(this.path, post, HeaderOptions);
  }

  public updatePost(post: Post): Observable<Post> {
    return this.http.put<Post>(this.path + '/' + post.id, post, HeaderOptions);
  }

  public deletePost(id: number): Observable<Post> {
    return this.http.delete<Post>(this.path + '/' + id, HeaderOptions);
  }
}
