import { Component, Input, OnInit } from '@angular/core';
import { Item } from 'src/assets/advanced-data';

@Component({
  selector: 'app-order-details',
  templateUrl: './order-details.component.html',
  styleUrls: ['./order-details.component.css']
})
export class OrderDetailsComponent implements OnInit {
  @Input() items: Item[];
  constructor() { }

  ngOnInit(): void {
  }

}
