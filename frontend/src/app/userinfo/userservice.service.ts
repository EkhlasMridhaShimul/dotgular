import { Injectable } from "@angular/core";
import { ResModel } from "../response.model";
import { UserModel } from "./userdata/user.model";
import { HttpClient } from "@angular/common/http";

@Injectable()
export class UserserviceService {
  constructor(private http: HttpClient) {}

  getUsers(pageNumber: number, pageSize: number) {
    return this.http.get<ResModel<UserModel>>(
      `http://localhost:55742/api/user?pageNumber=${pageNumber}&pageSize=${pageSize}`
    );
  }
}
