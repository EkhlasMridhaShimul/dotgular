import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { AddItemComponent } from "./add-item/add-item.component";
import { ItemListComponent } from "./item-list/item-list.component";
import { DataService } from "./data.service";
import { MyPostsComponent } from "./my-posts/my-posts.component";
import { EditItemComponent } from "./item-list/edit-item/edit-item.component";
import { HttpClientModule } from "@angular/common/http";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

@NgModule({
  declarations: [
    AppComponent,
    AddItemComponent,
    ItemListComponent,
    MyPostsComponent,
    EditItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule {}
