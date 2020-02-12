import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { MyPostsComponent } from "./my-posts/my-posts.component";
import { UserTableComponent } from "./userinfo/user-table/user-table.component";

const routes: Routes = [
  { path: "", component: MyPostsComponent },
  { path: "myinfo", component: UserTableComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
