import { Component, OnInit } from "@angular/core";
import { PostService } from "../services/post.service";
import { Response } from "@angular/http/src/static_response";
import { fade, bounceOutLeftAnimation } from "../animations";
import {
  animate,
  transition,
  trigger,
  state,
  style,
  keyframes,
  useAnimation,
  query
} from "@angular/animations";

@Component({
  selector: "app-posts",
  templateUrl: "./posts.component.html",
  styleUrls: ["./posts.component.css"],
  animations: [
    trigger("postsAnimation1", [
      transition(":enter", [
        query("h1", [style({ transform: "translateY(-10px)" }), animate(500)])
      ])
    ]),
    trigger("postsAnimation", [
      transition(":enter", [style({ opacity: 0 }), animate(500)]),
      transition(":leave", [
        style({ backgroundColor: "#E70018" }),
        animate(1000),
        useAnimation(bounceOutLeftAnimation)
      ])
    ])
  ]
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
