import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { Http, HttpModule } from "@angular/http";

import { AppComponent } from "./app.component";
import { PostsComponent } from "./posts/posts.component";
import { PostService } from "./services/post.service";
import { DataService } from "./services/data.service";
import { NavbarComponent } from "./navbar/navbar.component";
import { GithubProfileComponent } from "./github-profile/github-profile.component";
import { NotFoundComponent } from "./not-found/not-found.component";
import { HomeComponent } from "./home/home.component";
import { RouterModule } from "@angular/router";
import { GithubFollowersComponent } from "./github-followers/github-followers.component";

@NgModule({
  declarations: [
    AppComponent,
    PostsComponent,
    NavbarComponent,
    GithubProfileComponent,
    NotFoundComponent,
    HomeComponent,
    GithubFollowersComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    RouterModule.forRoot([
      { path: "", component: HomeComponent },
      { path: "follower/:username", component: GithubProfileComponent },
      { path: "followers", component: GithubFollowersComponent },
      { path: "posts", component: PostsComponent },
      { path: "**", component: NotFoundComponent }
    ])
  ],
  providers: [PostService, DataService],
  bootstrap: [AppComponent]
})
export class AppModule {}
