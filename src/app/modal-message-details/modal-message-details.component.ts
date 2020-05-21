import { Component, OnInit, Input  } from '@angular/core';
import { NgbModal, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap'; // to open related messages 
import { Message } from "./../traffic-messages-list/schemas.model";

@Component({
  selector: 'modal-message-details',
  templateUrl: './modal-message-details.component.html',
  styleUrls: ['./modal-message-details.component.scss']
})
export class ModalMessageDetailsComponent implements OnInit {

  @Input() messages : Message[];
  @Input() index :number;

  //googlemaps paramter
  lat: number;
  lng: number;
  zoom: number = 15;

  constructor(public modalService: NgbModal, public activeModal: NgbActiveModal) { }

  ngOnInit() {
    this.lat = this.messages[this.index].geokoordinaten.latitude;
    this.lng = this.messages[this.index].geokoordinaten.longitude;
    console.log(this.index,this.messages[this.index]);
  }

 openModal(id) {
    const index = this.messages.findIndex(element => id === element.meldungsId);
    if(index !== -1)
    {    
      const modalRef = this.modalService.open(ModalMessageDetailsComponent,{ centered: true, size: 'lg' });
      modalRef.componentInstance.messages = this.messages;
      modalRef.componentInstance.index = index;
    }
  } 
}