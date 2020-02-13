import { Component, OnInit, Input } from "@angular/core";
import { DataService } from "../data.service";
import { PostModel } from "../post.model";
import { ResModel } from "../response.model";

@Component({
  selector: "app-my-posts",
  templateUrl: "./my-posts.component.html",
  styleUrls: ["./my-posts.component.css"]
})
export class MyPostsComponent implements OnInit {
  private notes: ResModel<PostModel>;

  alertDialogue: string = "";
  counter: Number;
  private currentPage: number = 1;
  pageNumbers: number[] = [];

  pageCreated: boolean = true;
  public noteList: PostModel[];

  constructor(private dataService: DataService) {}

  ngOnInit() {
    this.dataService.getPosts(this.currentPage, 3).subscribe(res => {
      if (res) {
        this.notes = res;
        this.noteList = this.notes.result;
        this.getNoteCount();
        this.pageNumbers = this.dataService.pageNumbers;
      }
    });
  }

  getNoteCount() {
    this.counter = this.noteList.length;
  }

  deleted(info: PostModel) {
    this.alertDialogue = info.title + " deleted";
    this.noteList.splice(
      this.noteList.findIndex(item => item.id === info.id),
      1
    );
    this.dataService.getPosts(this.currentPage, 3).subscribe(res => {
      this.notes = res;
      this.noteList = res.result;
      this.getNoteCount();
    });
  }

  itemAdded(info: PostModel) {
    this.getNoteCount();
    this.alertDialogue = info.title + " added";
    if (this.noteList.length < 3) {
      this.notes.result.push(info);
    }
    this.dataService.getPosts(this.currentPage, 3).subscribe(res => {
      this.notes = res;
      this.noteList = res.result;
      this.getNoteCount();
    });
  }

  postChanged(info: PostModel) {
    let data = this.noteList.findIndex(item => item.id === info.id);
    this.noteList[data].post = info.post;
    this.alertDialogue = info.title + " changed";
  }

  nextPage() {
    if (this.currentPage < this.dataService.totalPage) {
      this.currentPage += 1;
      this.dataService.getPosts(this.currentPage, 3).subscribe(res => {
        if (res.result.length != 0) {
          this.noteList = res.result;
          this.getNoteCount();
        }
      });
    }
  }

  previousPage() {
    if (this.currentPage > 1) {
      this.currentPage -= 1;
      this.dataService.getPosts(this.currentPage, 3).subscribe(res => {
        this.noteList = res.result;
        this.getNoteCount();
      });
    }
  }

  getIndexedPost(pageIndex: number) {
    this.dataService.getPosts(pageIndex, 3).subscribe(res => {
      this.noteList = res.result;
      this.currentPage = pageIndex;
    });
  }
}
