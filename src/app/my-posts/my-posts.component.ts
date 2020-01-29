import { Component, OnInit } from "@angular/core";
import { DataService } from "../data.service";
import { PostModel } from "../post.model";

@Component({
  selector: "app-my-posts",
  templateUrl: "./my-posts.component.html",
  styleUrls: ["./my-posts.component.css"]
})
export class MyPostsComponent implements OnInit {
  private notes: PostModel[] = [];

  alertDialogue: string = "";
  counter: Number;
  private currentPage: number = 1;
  pageNumbers: number[] = [];

  constructor(private dataService: DataService) {}

  ngOnInit() {
    this.dataService.getPosts(this.currentPage, 3).subscribe(res => {
      this.notes = res;
      this.getNoteCount();
      this.pageNumbers = this.dataService.pageNumbers;
    });
  }

  getNoteCount() {
    this.counter = this.notes.length;
  }

  deleted(info: PostModel) {
    this.alertDialogue = info.title + " deleted";
    this.notes.splice(
      this.notes.findIndex(item => item.id === info.id),
      1
    );
    this.dataService.getPosts(this.currentPage, 3).subscribe(res => {
      this.notes = res;
      this.getNoteCount();
    });
  }

  itemAdded(info: PostModel) {
    this.getNoteCount();
    this.alertDialogue = info.title + " added";
    if (this.notes.length < 3) {
      this.notes.push(info);
    }
    this.dataService.getPosts(this.currentPage, 3).subscribe(res => {
      this.notes = res;
      this.getNoteCount();
    });
  }

  postChanged(info: PostModel) {
    let data = this.notes.findIndex(item => item.id === info.id);
    this.notes[data].post = info.post;
    this.alertDialogue = info.title + " changed";
  }

  nextPage() {
    if (this.currentPage < this.dataService.totalPage) {
      this.currentPage += 1;
      this.dataService.getPosts(this.currentPage, 3).subscribe(res => {
        if (res.length != 0) {
          this.notes = res;
          this.getNoteCount();
        }
      });
    }
  }

  previousPage() {
    if (this.currentPage > 1) {
      this.currentPage -= 1;
      this.dataService.getPosts(this.currentPage, 3).subscribe(res => {
        this.notes = res;
        this.getNoteCount();
      });
    }
  }

  getIndexedPost(pageIndex: number) {
    this.dataService.getPosts(pageIndex, 3).subscribe(res => {
      this.notes = res;
    });
  }
}
