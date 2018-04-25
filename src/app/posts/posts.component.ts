import { Component, OnInit } from "@angular/core";
import { PostService } from "../services/post.service";

@Component({
  selector: "app-posts",
  templateUrl: "./posts.component.html",
  styleUrls: ["./posts.component.css"]
})
export class PostsComponent implements OnInit {
  posts: any[];
  constructor(private service: PostService) {}

  createPost(input: HTMLInputElement) {
    let post: any = { title: input.value };
    input.value = "";
    this.service.createPost(post).subscribe(res => {
      post["id"] = res.json().id;
      this.posts.splice(0, 0, post);
    });
  }

  updatePost(post) {
    this.service.updatePost(post).subscribe(res => {
      console.log(res.json());
    });
  }

  deletePost(post) {
    this.service.deletePost(post).subscribe(res => {
      let index = this.posts.indexOf(post);
      this.posts.splice(index, 1);
    });
  }

  ngOnInit() {
    this.service.getPosts().subscribe(res => {
      console.log((this.posts = res.json()));
    });
  }
}
