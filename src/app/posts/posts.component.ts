import { Component, OnInit } from "@angular/core";
import { Http } from "@angular/http";

@Component({
  selector: "app-posts",
  templateUrl: "./posts.component.html",
  styleUrls: ["./posts.component.css"]
})
export class PostsComponent implements OnInit {
  posts: any[];
  private url = "http://jsonplaceholder.typicode.com/posts";
  constructor(private http: Http) {
    http.get(this.url).subscribe(res => {
      console.log((this.posts = res.json()));
    });
  }

  createPost(input: HTMLInputElement) {
    let post: any = { title: input.value };
    input.value = "";
    this.http.post(this.url, JSON.stringify(post)).subscribe(res => {
      post["id"] = res.json().id;
      this.posts.splice(0, 0, post);
    });
  }

  updatePost(post) {
    this.http
      .patch(this.url + "/" + post.id, JSON.stringify({ isRead: true }))
      .subscribe(res => {
        console.log(res.json());
      });
  }

  deletePost(post) {
    this.http.delete(this.url + "/" + post.id).subscribe(res => {
      let index = this.posts.indexOf(post);
      this.posts.splice(index, 1);
    });
  }

  ngOnInit() {}
}
