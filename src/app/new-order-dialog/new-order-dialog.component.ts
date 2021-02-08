import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Item, Order, OrdersComponent } from 'src/assets/advanced-data';

@Component({
  selector: 'app-new-order-dialog',
  templateUrl: './new-order-dialog.component.html',
  styleUrls: ['./new-order-dialog.component.css'],
})
export class NewOrderDialogComponent implements OnInit {
  name: string;
  email: string;
  items: Item[];

  categories = new OrdersComponent().categories;
  motherboards = new OrdersComponent().motherBoardList;
  cpus = new OrdersComponent().cpuList;
  videoCards = new OrdersComponent().videoCardList;
  memories = new OrdersComponent().memoryList;

  constructor(
    public dialogRef: MatDialogRef<NewOrderDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { orders: Order[] }
  ) {
    let firstItem: Item = {
      name: '',
      category: '',
      price: 0
    };
    this.items = [firstItem];
  }

  ngOnInit(): void {
    
  }

  onSubmit(): void {
    let totalPrice = 0;
    for(let i = 0; i < this.items.length; i++) {
      totalPrice += this.items[i].price;
    }

    let order: Order = {
      customerName: this.name,
      email: this.email,
      totalPrice,
      items: this.items
    }
    
    this.data.orders.push(order);
    this.dialogRef.close();

    console.log(this.name, this.email, this.items);
  }

  onCancel(): void {
    this.dialogRef.close();
  }

  setCpuPrice(item: Item): void {
    this.cpus.forEach(i => {
      if(i.name === item.name) {
        item.price = i.price;
      }
    });
  }

  setMotherboardPrice(item: Item): void {
    this.motherboards.forEach(i => {
      if(i.name === item.name) {
        item.price = i.price;
      }
    });
  }

  setMemoryPrice(item: Item): void {
    this.memories.forEach(i => {
      if(i.name === item.name) {
        item.price = i.price;
      }
    });
  }

  setVideoCardPrice(item: Item): void {
    this.videoCards.forEach(i => {
      if(i.name === item.name) {
        item.price = i.price;
      }
    });
  }

  addItem(): void {
    let newItem: Item = {
      name: '',
      category: '',
      price: 0
    };
    this.items.push(newItem);
  }
}
