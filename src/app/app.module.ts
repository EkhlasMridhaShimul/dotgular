import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { AddItemComponent } from "./add-item/add-item.component";
import { ItemListComponent } from "./item-list/item-list.component";
import { DataService } from "./data.service";
import { MyInfoComponent } from "./my-info/my-info.component";
import { MyPostsComponent } from "./my-posts/my-posts.component";
import { EditItemComponent } from "./item-list/edit-item/edit-item.component";
import { HttpClientModule } from "@angular/common/http";

@NgModule({
  declarations: [
    AppComponent,
    AddItemComponent,
    ItemListComponent,
    MyInfoComponent,
    MyPostsComponent,
    EditItemComponent
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, HttpClientModule],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule {}
