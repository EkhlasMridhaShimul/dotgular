import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { UserdataComponent } from "./userdata/userdata.component";
import { MatTableModule } from "@angular/material/table";
import { HttpClientModule } from "@angular/common/http";
import { UserserviceService } from "./userservice.service";
import { UserRoutingModule } from "./user-routing.module";
import { MatPaginatorModule } from "@angular/material/paginator";
import { UserDetailComponent } from "./user-detail/user-detail.component";
import { MatFormFieldModule } from "@angular/material/form-field";
import { UserEntryComponent } from './user-entry/user-entry.component';

@NgModule({
  declarations: [UserdataComponent, UserDetailComponent, UserEntryComponent],
  imports: [
    CommonModule,
    UserRoutingModule,
    MatTableModule,
    HttpClientModule,
    MatPaginatorModule,
    MatFormFieldModule
  ],
  providers: [UserserviceService],
  exports: [UserdataComponent]
})
export class UserinfoModule {}
