import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { UserdataComponent } from "./userdata/userdata.component";
import { AppRoutingModule } from "../app-routing.module";

@NgModule({
  declarations: [UserdataComponent],
  imports: [CommonModule, AppRoutingModule]
})
export class UserinfoModule {}
