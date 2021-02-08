import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Item, Order, OrdersComponent } from 'src/assets/advanced-data';

@Component({
  selector: 'app-edit-order-dialog',
  templateUrl: './edit-order-dialog.component.html',
  styleUrls: ['./edit-order-dialog.component.css'],
})
export class EditOrderDialogComponent implements OnInit {
  name: string;
  email: string;
  items: Item[];
  currentOrder: Order;

  categories = new OrdersComponent().categories;
  motherboards = new OrdersComponent().motherBoardList;
  cpus = new OrdersComponent().cpuList;
  videoCards = new OrdersComponent().videoCardList;
  memories = new OrdersComponent().memoryList;

  constructor(
    public dialogRef: MatDialogRef<EditOrderDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { orders: Order[]; order: Order }
  ) {}

  ngOnInit(): void {
    this.items = this.data.order.items;
    this.name = this.data.order.customerName;
    this.email = this.data.order.email;
    this.items = this.data.order.items;
    this.currentOrder = this.data.order;
  }

  addItem(): void {
    let newItem: Item = {
      name: '',
      category: '',
      price: 0,
    };
    this.items.push(newItem);
  }

  onCancel(): void {
    this.dialogRef.close();
  }

  onSubmit(): void {
    let index = this.data.orders.indexOf(this.currentOrder);
    let totalPrice = 0;
    for(let i = 0; i < this.items.length; i++) {
      totalPrice += this.items[i].price;
    }
    let updatedOrder: Order = {
      customerName: this.name,
      email: this.email,
      items: this.items,
      totalPrice
    }

    this.data.orders[index] = updatedOrder;

    this.dialogRef.close();
  }


  setCpuPrice(item: Item): void {
    this.cpus.forEach((i) => {
      if (i.name === item.name) {
        item.price = i.price;
      }
    });
  }

  setMotherboardPrice(item: Item): void {
    this.motherboards.forEach((i) => {
      if (i.name === item.name) {
        item.price = i.price;
      }
    });
  }

  setMemoryPrice(item: Item): void {
    this.memories.forEach((i) => {
      if (i.name === item.name) {
        item.price = i.price;
      }
    });
  }

  setVideoCardPrice(item: Item): void {
    this.videoCards.forEach((i) => {
      if (i.name === item.name) {
        item.price = i.price;
      }
    });
  }
}
