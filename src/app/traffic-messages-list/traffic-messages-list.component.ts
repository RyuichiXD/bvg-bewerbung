import { Component, OnInit } from '@angular/core';
import { DUMMY_MESSAGES } from './dummy-data';

@Component({
  selector: 'traffic-messages-list',
  templateUrl: './traffic-messages-list.component.html',
  styleUrls: ['./traffic-messages-list.component.scss']
})
export class TrafficMessagesListComponent implements OnInit {
  
  private selectedPage: number = 1;
  private pageSize: number = 10;
  private collectionSize = DUMMY_MESSAGES.length;

  constructor() { }

  ngOnInit() {
  }

 get tableElements() {
    return DUMMY_MESSAGES
      .map((country, i) => ({id: i + 1, ...country}))
      .slice((this.selectedPage - 1) * this.pageSize, (this.selectedPage - 1) * this.pageSize + this.pageSize);
  } 
}
