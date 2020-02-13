import { Component, OnInit, ViewChild } from "@angular/core";
import { UserserviceService } from "../userservice.service";
import { ResModel } from "src/app/response.model";
import { UserModel } from "./user.model";
import { MatPaginator } from "@angular/material/paginator";
import { MatTableDataSource } from "@angular/material/table";

@Component({
  selector: "app-userdata",
  templateUrl: "./userdata.component.html",
  styleUrls: ["./userdata.component.css"]
})
export class UserdataComponent implements OnInit {
  pagedUserData: ResModel<UserModel>;
  users: MatTableDataSource<UserModel>;
  displayedColumns: string[] = ["username", "email", "gender", "age"];
  totalData: number;

  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(private userService: UserserviceService) {}

  ngOnInit() {
    this.userService.getUsers(1, 2).subscribe(res => {
      this.pagedUserData = res;
      this.users = new MatTableDataSource(this.pagedUserData.result);
      console.log(this.users);
      this.users.paginator = this.paginator;
      this.totalData = this.pagedUserData.totalnotes;
    });
  }
}
