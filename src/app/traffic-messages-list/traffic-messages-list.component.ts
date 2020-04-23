import { Component, OnInit } from "@angular/core";
//import { DUMMY_MESSAGES } from './dummy-data'; // for development without requesting the api
import { Message } from "./schemas.model";
import { ApiRequesterService } from "./api-requester.service";
import { NgbModal } from "@ng-bootstrap/ng-bootstrap";
import { ModalMessageDetailsComponent } from "./../modal-message-details/modal-message-details.component";


@Component({
  selector: "traffic-messages-list",
  templateUrl: "./traffic-messages-list.component.html",
  styleUrls: ["./traffic-messages-list.component.scss"],
})
export class TrafficMessagesListComponent implements OnInit {

  //pagination settings 
  selectedPage: number = 1;
  pageSize: number = 13;
  collectionSize: number;

  isLoading: boolean = true;
  errorMsg: string;
  tableData: Message[] = []; //received data
  filteredMessages= ""; //for table filter

  constructor(
    private apiReqService: ApiRequesterService,
    private modalService: NgbModal
  ) {}

  ngOnInit() {
    this.isLoading = true;
    this.apiReqService.requestMessages().subscribe(
      (response) => {
        this.isLoading = false;
        this.tableData = response;
        this.collectionSize = this.tableData.length;
      },
      (error) => {
        this.isLoading = false;
        this.errorMsg = error.message;
        console.error(error);
      }
    );
  }
  //for pagination 
  get tableElements(): Message[] {
  return this.tableData
      .map((element, i) => ({ id: i + 1, ...element }))
      .slice(
        (this.selectedPage - 1) * this.pageSize,
        (this.selectedPage - 1) * this.pageSize + this.pageSize
      );
  }

  openDetailsModal(index){
    const modalRef = this.modalService.open(ModalMessageDetailsComponent,{ centered: true, size: 'lg' });
    modalRef.componentInstance.messages = this.tableData;
    modalRef.componentInstance.index = index;
  }

}
