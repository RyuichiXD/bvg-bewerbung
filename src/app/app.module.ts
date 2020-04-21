import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';

//import { NgbdTablePagination } from './table-pagination';
//custom made
import { TrafficMessagesListComponent } from './traffic-messages-list/traffic-messages-list.component';
import { TrafficMessagesFilterComponent } from './traffic-messages-filter/traffic-messages-filter.component';

@NgModule({
  declarations: [
    AppComponent,
    TrafficMessagesListComponent,
    TrafficMessagesFilterComponent
  ],
  imports: [
    FormsModule,
    NgbModule,
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
