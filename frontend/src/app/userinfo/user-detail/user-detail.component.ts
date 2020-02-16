import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { UserserviceService } from "../userservice.service";
import { MatTableDataSource } from "@angular/material/table";
import { ResModel } from "src/app/response.model";
import { UserModel } from "../userdata/user.model";
import { UserDetail } from "../userdata/user-detai.model";

@Component({
  selector: "app-user-detail",
  templateUrl: "./user-detail.component.html",
  styleUrls: ["./user-detail.component.css"]
})
export class UserDetailComponent implements OnInit {
  pagedUserData: ResModel<UserModel<UserDetail>>;

  constructor(
    private router: Router,
    private userService: UserserviceService
  ) {}

  ngOnInit(): void {
    this.userService.getUsers(1, 3).subscribe(res => {
      this.pagedUserData = res;
    });
  }
}
