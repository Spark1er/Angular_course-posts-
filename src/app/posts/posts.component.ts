import { Component, OnInit } from "@angular/core";
import { PostService } from "../services/post.service";
import { Response } from "@angular/http/src/static_response";

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
    this.service.create(post).subscribe(
      res => {
        post["id"] = res.json().id;
        this.posts.splice(0, 0, post);
      },
      (err: Response) => {
        if (err.status === 400) {
          // alert("Error!");
        } else {
          alert("Error!");
          console.log(err);
        }
      }
    );
  }

  updatePost(post) {
    this.service.update(post).subscribe(res => {
      console.log(res.json());
    });
  }

  deletePost(post) {
    this.service.delete(post.id).subscribe(res => {
      let index = this.posts.indexOf(post);
      this.posts.splice(index, 1);
    });
  }

  ngOnInit() {
    this.service.getAll().subscribe(
      res => {
        console.log((this.posts = res.json()));
      },
      (err: Response) => {
        if (err.status === 404) {
          alert("This post has been deleted!");
        } else {
          alert("Error!");
          console.log(err);
        }
      }
    );
  }
}
