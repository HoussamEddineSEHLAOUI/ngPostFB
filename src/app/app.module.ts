import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { PostfacebookComponent } from './postfacebook/postfacebook.component';

@NgModule({
  declarations: [
    AppComponent,
    PostfacebookComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
