import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { DataService } from "src/app/data.service";
import { PostModel } from "src/app/post.model";

@Component({
  selector: "app-edit-item",
  templateUrl: "./edit-item.component.html",
  styleUrls: ["./edit-item.component.css"]
})
export class EditItemComponent implements OnInit {
  @Input() note: PostModel;
  @Output() deletedPost = new EventEmitter<PostModel>();
  @Output() changedPost = new EventEmitter<PostModel>();

  constructor(private dataService: DataService) {}

  ngOnInit() {}

  deletePost() {
    this.dataService.deleteNote(this.note.id).subscribe(res => {
      this.deletedPost.emit(this.note);
    });
  }

  changeThisPost(post: string) {
    this.dataService
      .changePost(this.note.id, this.note.title, post)
      .subscribe(res => {
        this.changedPost.emit(res);
      });
  }
}
