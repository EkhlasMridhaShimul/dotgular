import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { UserdataComponent } from "./userdata/userdata.component";
import { MatTableModule } from "@angular/material/table";
import { HttpClientModule } from "@angular/common/http";
import { UserserviceService } from "./userservice.service";
import { UserRoutingModule } from "./user-routing.module";
import { MatPaginatorModule } from "@angular/material/paginator";
import { UserDetailComponent } from './user-detail/user-detail.component';

@NgModule({
  declarations: [UserdataComponent, UserDetailComponent],
  imports: [
    CommonModule,
    UserRoutingModule,
    MatTableModule,
    HttpClientModule,
    MatPaginatorModule
  ],
  providers: [UserserviceService],
  exports: [UserdataComponent]
})
export class UserinfoModule {}
