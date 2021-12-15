import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TeetimeService } from "./teetime.service";
import { TeetimeComponent } from './teetime/teetime.component';
import { HttpClientModule } from "@angular/common/http";
import { FormsModule } from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent,
    TeetimeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [TeetimeService],
  bootstrap: [TeetimeComponent]
})
export class AppModule { }
