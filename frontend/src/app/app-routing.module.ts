import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { MyPostsComponent } from "./my-posts/my-posts.component";
import { UserdataComponent } from "./userinfo/userdata/userdata.component";

const routes: Routes = [
  { path: "", component: MyPostsComponent },
  { path: "userinfo", component: UserdataComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
