import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Order, OrdersComponent } from 'src/assets/advanced-data';
import { EditOrderDialogComponent } from './edit-order-dialog/edit-order-dialog.component';
import { NewOrderDialogComponent } from './new-order-dialog/new-order-dialog.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'challenge3';
  orders: Order[];

  constructor(public dialog: MatDialog) {
    this.orders = new OrdersComponent().orders;
    console.log('this.orders', this.orders);
  }

  onAdd(): void {
    let dialogRef = this.dialog.open(NewOrderDialogComponent, {
      data: {
        orders: this.orders
      }
    })
  }
  onDelete(order: Order): void {
    let i = this.orders.indexOf(order);
    this.orders.splice(i, 1);
  }
  onEdit(order: Order): void {
    this.dialog.open(EditOrderDialogComponent, {
      data: {
        orders: this.orders,
        order
      }
    })
  }
}
