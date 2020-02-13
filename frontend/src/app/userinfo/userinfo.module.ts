import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { UserdataComponent } from "./userdata/userdata.component";
import { MatTableModule } from "@angular/material/table";
import { HttpClientModule } from "@angular/common/http";
import { UserserviceService } from "./userservice.service";
import { UserRoutingModule } from "./user-routing.module";

@NgModule({
  declarations: [UserdataComponent],
  imports: [CommonModule, UserRoutingModule, MatTableModule, HttpClientModule],
  providers: [UserserviceService],
  exports: [UserdataComponent]
})
export class UserinfoModule {}
