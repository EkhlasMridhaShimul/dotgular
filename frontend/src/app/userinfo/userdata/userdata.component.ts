import { Component, OnInit } from "@angular/core";
import { DataService } from "src/app/data.service";

@Component({
  selector: "app-userdata",
  templateUrl: "./userdata.component.html",
  styleUrls: ["./userdata.component.css"]
})
export class UserdataComponent implements OnInit {
  constructor(dataService: DataService) {}

  ngOnInit() {}
}
