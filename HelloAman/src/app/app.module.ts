import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HeaderComponent} from './app-header/header.component';
import {TextComponent} from './app-text/text.component';
import {ListComponent} from './app-list/list.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    TextComponent,
    ListComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
