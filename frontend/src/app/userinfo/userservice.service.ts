import { Injectable } from "@angular/core";
import { ResModel } from "../response.model";
import { UserModel } from "./userdata/user.model";
import { HttpClient } from "@angular/common/http";
import { UserDetail } from "./userdata/user-detai.model";

@Injectable()
export class UserserviceService {
  constructor(private http: HttpClient) {}

  getUsers(pageNumber: number, pageSize: number) {
    return this.http.get<ResModel<UserModel<UserDetail>>>(
      `http://localhost:55742/api/user?pageNumber=${pageNumber}&pageSize=${pageSize}`
    );
  }
}
