import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { UserdataComponent } from "./userdata/userdata.component";
import { AppRoutingModule } from "../app-routing.module";
import { UserTableComponent } from "./user-table/user-table.component";
import { MatTableModule } from "@angular/material/table";
import { MatPaginatorModule } from "@angular/material/paginator";
import { MatSortModule } from "@angular/material/sort";

@NgModule({
  declarations: [UserdataComponent, UserTableComponent],
  imports: [
    CommonModule,
    AppRoutingModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule
  ],
  exports: [UserTableComponent]
})
export class UserinfoModule {}
