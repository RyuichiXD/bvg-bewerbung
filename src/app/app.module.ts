import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';

//custom made
import { TrafficMessagesListComponent } from './traffic-messages-list/traffic-messages-list.component';
import { ModalMessageDetailsComponent } from './modal-message-details/modal-message-details.component';
import { AgmCoreModule } from '@agm/core'; // googlemaps
import { TableFilterPipe } from './traffic-messages-list/table-filter.pipe'; 

@NgModule({
  declarations: [
    AppComponent,
    TrafficMessagesListComponent,
    ModalMessageDetailsComponent,
    TableFilterPipe
  ],
  imports: [
    HttpClientModule,
    FormsModule,
    NgbModule,
    BrowserModule,
    AgmCoreModule.forRoot({
      apiKey: ''
    })
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [ ModalMessageDetailsComponent]
})
export class AppModule { }
