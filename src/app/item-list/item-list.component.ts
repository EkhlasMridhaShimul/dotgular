import {
  Component,
  OnInit,
  Input,
  Output,
  EventEmitter,
  OnChanges
} from "@angular/core";
import { DataService } from "../data.service";
import { PostModel } from "../post.model";

@Component({
  selector: "app-item-list",
  templateUrl: "./item-list.component.html",
  styleUrls: ["./item-list.component.css"]
})
export class ItemListComponent implements OnInit {
  @Input() note: PostModel;
  @Output() deletedPost = new EventEmitter<PostModel>();
  @Output() changedPost = new EventEmitter<PostModel>();

  deletedItemName: string = "";

  constructor(private dataService: DataService) {}

  ngOnInit() {}

  deletedName(info: PostModel) {
    this.deletedPost.emit(info);
  }

  changingPost(info: PostModel) {
    this.changedPost.emit(info);
  }
}
