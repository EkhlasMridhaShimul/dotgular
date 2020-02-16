import { Component, OnInit, ViewChild } from "@angular/core";
import { UserserviceService } from "../userservice.service";
import { ResModel } from "src/app/response.model";
import { UserModel } from "./user.model";
import { MatTableDataSource } from "@angular/material/table";
import { UserDetail } from "./user-detai.model";
import { Router } from "@angular/router";
import { MatPaginator } from "@angular/material/paginator";

@Component({
  selector: "app-userdata",
  templateUrl: "./userdata.component.html",
  styleUrls: ["./userdata.component.css"]
})
export class UserdataComponent implements OnInit {
  pagedUserData: ResModel<UserModel<UserDetail>>;
  users: MatTableDataSource<UserModel<UserDetail>>;
  displayedColumns: string[] = ["username", "email"];
  totalData: number;

  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(
    private userService: UserserviceService,
    private router: Router
  ) {}

  ngOnInit() {
    this.userService.getUsers(1, 2).subscribe(res => {
      this.pagedUserData = res;
      this.users = new MatTableDataSource(this.pagedUserData.result);
      this.paginator.length = res.totalPages;
      this.totalData = this.pagedUserData.totalPages;
    });
  }

  takeToUserDetail(row) {
    this.router.navigate(["userinfo", "detail"], row);
  }

  getPagedData(row2) {
    this.userService
      .getUsers(this.paginator.pageIndex + 1, this.paginator.pageSize)
      .subscribe(res => {
        this.pagedUserData = res;
        this.users.data = this.pagedUserData.result;
      });
  }
}
