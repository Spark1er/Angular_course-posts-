import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { Http, HttpModule } from "@angular/http";

import { AppComponent } from "./app.component";
import { PostsComponent } from "./posts/posts.component";
import { PostService } from "./services/post.service";
import { DataService } from "./services/data.service";

@NgModule({
  declarations: [AppComponent, PostsComponent],
  imports: [BrowserModule, HttpModule],
  providers: [PostService, DataService],
  bootstrap: [AppComponent]
})
export class AppModule {}
