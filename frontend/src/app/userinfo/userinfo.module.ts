import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { UserdataComponent } from "./userdata/userdata.component";
import { AppRoutingModule } from "../app-routing.module";
import { MatTableModule } from "@angular/material/table";
import { HttpClientModule } from "@angular/common/http";
import { UserserviceService } from "./userservice.service";
import { MatPaginatorModule } from "@angular/material/paginator";

@NgModule({
  declarations: [UserdataComponent],
  imports: [
    CommonModule,
    AppRoutingModule,
    MatTableModule,
    HttpClientModule,
    MatPaginatorModule
  ],
  providers: [UserserviceService],
  exports: [UserdataComponent]
})
export class UserinfoModule {}
