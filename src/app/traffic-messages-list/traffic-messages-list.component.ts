import { Component, OnInit } from '@angular/core';
import { Message } from './schemas.model'
import { DUMMY_MESSAGES } from './dummy-data';
import { ApiRequesterService } from './api-requester.service';

@Component({
  selector: 'traffic-messages-list',
  templateUrl: './traffic-messages-list.component.html',
  styleUrls: ['./traffic-messages-list.component.scss']
})
export class TrafficMessagesListComponent implements OnInit {
  
  private selectedPage: number = 1;
  private pageSize: number = 10;
  private collectionSize: number = DUMMY_MESSAGES.length;

  isLoading: boolean = true;
  tableData: Message[] = [];
  error: string;
  constructor(private apiReqService: ApiRequesterService) { }

  ngOnInit() {
/*     this.isLoading = true;
    this.apiReqService.requestMessages().subscribe(
      response => {
        this.isLoading = false;
        this.tableData = response;
      },
      error => {
        this.isLoading = false;
        this.error = error.message;
      }
    ); */
  }

 get tableElements() : Message[] {
    return this.tableData
      .map((element, i) => ({id: i + 1, ...element}))
      .slice((this.selectedPage - 1) * this.pageSize, (this.selectedPage - 1) * this.pageSize + this.pageSize);
  } 
}
