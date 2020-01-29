import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { MyPostsComponent } from "./my-posts/my-posts.component";
import { MyInfoComponent } from "./my-info/my-info.component";

const routes: Routes = [
  { path: "", component: MyPostsComponent },
  { path: "myinfo", component: MyInfoComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
