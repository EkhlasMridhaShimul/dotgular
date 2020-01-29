import { Component, Output, EventEmitter } from "@angular/core";
import { DataService } from "../data.service";
import { PostModel } from "../post.model";
import { map } from "rxjs/operators";

@Component({
  selector: "app-add-item",
  templateUrl: "./add-item.component.html",
  styleUrls: ["./add-item.component.css"]
})
export class AddItemComponent {
  @Output() addedItem = new EventEmitter<PostModel>();

  constructor(private dataService: DataService) {}

  addItem(title: string, post: string) {
    this.dataService.onAddItem({ title: title, post: post }).subscribe(res => {
      this.addedItem.emit(res);
    });
  }
}
