import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TrafficMessagesListComponent } from './traffic-messages-list/traffic-messages-list.component';

@NgModule({
  declarations: [
    AppComponent,
    TrafficMessagesListComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
