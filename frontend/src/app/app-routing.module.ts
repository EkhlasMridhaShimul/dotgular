import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { MyPostsComponent } from "./my-posts/my-posts.component";

const routes: Routes = [
  { path: "", component: MyPostsComponent },
  {
    path: "userinfo",
    loadChildren: () =>
      import("./userinfo/userinfo.module").then(m => m.UserinfoModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
