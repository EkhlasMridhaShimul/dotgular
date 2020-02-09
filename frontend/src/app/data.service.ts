import { Injectable } from "@angular/core";
import { HttpClient, HttpResponse } from "@angular/common/http";
import { map } from "rxjs/operators";
import { PostModel } from "./post.model";
import { ResModel } from "./response.model";

@Injectable({
  providedIn: "root"
})
export class DataService {
  constructor(private http: HttpClient) {}

  totalPage: number;
  pageNumbers: number[] = [];

  getPosts(pageNumber: number, size: number) {
    return this.http
      .get<ResModel>(
        `http://localhost:55742/api/notes?pageNumber=${pageNumber}&pageSize=${size}`
      )
      .pipe(
        map(response => {
          this.pageNumbers = [];
          let responseData: ResModel;
          responseData = response;
          this.totalPage = responseData.totalnotes;

          for (var i = 0; i < responseData.totalnotes; ++i) {
            this.pageNumbers.push(i + 1);
          }

          return responseData;
        })
      );
  }

  onAddItem(data: { title: string; post: string }) {
    return this.http.post<PostModel>("http://localhost:55742/api/notes", data);
  }

  deleteNote(id: string) {
    return this.http.delete(`http://localhost:55742/api/notes/${id}`);
  }

  changePost(id: string, title: string, post: string) {
    return this.http.put<PostModel>(`http://localhost:55742/api/notes/`, {
      Id: id,
      title: title,
      post: post
    });
  }
}
