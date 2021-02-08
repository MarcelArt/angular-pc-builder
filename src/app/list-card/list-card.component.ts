import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Order } from '../../assets/advanced-data';

@Component({
  selector: 'app-list-card',
  templateUrl: './list-card.component.html',
  styleUrls: ['./list-card.component.css']
})
export class ListCardComponent implements OnInit {
  @Input() order: Order;
  @Output() deleteOrder = new EventEmitter();
  @Output() editOrder = new EventEmitter();

  constructor() { 
  }

  ngOnInit(): void {
  }

}
