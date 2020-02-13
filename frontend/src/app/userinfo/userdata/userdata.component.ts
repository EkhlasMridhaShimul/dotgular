import { Component, OnInit } from "@angular/core";
import { UserserviceService } from "../userservice.service";
import { ResModel } from "src/app/response.model";
import { UserModel } from "./user.model";
import { MatTableDataSource } from "@angular/material/table";

@Component({
  selector: "app-userdata",
  templateUrl: "./userdata.component.html",
  styleUrls: ["./userdata.component.css"]
})
export class UserdataComponent implements OnInit {
  pagedUserData: ResModel<UserModel>;
  users: MatTableDataSource<UserModel>;
  displayedColumns: string[] = ["username", "email"];
  totalData: number;

  constructor(private userService: UserserviceService) {}

  ngOnInit() {
    this.userService.getUsers(1, 2).subscribe(res => {
      this.pagedUserData = res;
      this.users = new MatTableDataSource(this.pagedUserData.result);
      this.totalData = this.pagedUserData.totalPages;
    });
  }

  takeId(row) {
    console.log(row.data);
  }
}
