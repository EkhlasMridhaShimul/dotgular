import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule, Routes } from "@angular/router";
import { UserdataComponent } from "./userdata/userdata.component";

const routes: Routes = [{ path: "", component: UserdataComponent }];

@NgModule({
  imports: [CommonModule, RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule {}
