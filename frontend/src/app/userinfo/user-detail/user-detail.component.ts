import { Component, OnInit } from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";
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
  id: string;
  userDetail: UserDetail;
  name: string;
  age: number;
  gender: string;
  displayedColumns: string[] = ["name", "age", "gender"];

  constructor(
    private route: ActivatedRoute,
    private userService: UserserviceService
  ) {}

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get("id");
    this.userService.getSingleUser(this.id).subscribe(res => {
      this.userDetail = res.details;
      this.name = this.userDetail.firstName + " " + this.userDetail.lastName;
      this.age = this.userDetail.age;
      this.gender = this.userDetail.gender;
    });
  }
}
