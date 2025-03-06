import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { NgIf } from '@angular/common';
import { NgClass } from '@angular/common';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-pantalla1',
  standalone:true,
  imports: [CommonModule, NgIf, NgClass, NgFor],
  templateUrl: './pantalla1.component.html',
  styleUrl: './pantalla1.component.scss'
})

export class Pantalla1Component {
  //Tabs
  tabs = [
    { label: 'Upcoming' },
    { label: 'Completed' },
    { label: 'Past' }
  ];

  activeTabIndex = 0;

  selectTab(index: number): void {
    this.activeTabIndex = index;
  }

  isActiveTab(index: number): boolean {
    return this.activeTabIndex === index;
  }

  // Cards
  orders = [
    {
      orderId: '#7804GNZ',
      type: 'FCL',
      status: 'In Transit',
      showCircle: true,
      pickupLocation: 'New York',
      pickupTime: '12:00pm',
      pickupAddress: '25 Mortada street, Gainalkes..',
      pickupDate: '12/09/2023',
      dropoffLocation: 'New York',
      dropoffTime: '12:00pm',
      dropoffAddress: '1789 NJ-27, Edison, 08817',
      dropoffDate: '12/09/2023',
      showButtonLeft: true,
      pickupButtonText: "It's time for pickup",
      showButtonRight: true,
      resumeButtonText: 'Resume'
    },
    {
    orderId: '#ASI890EY4',
      type: 'FTL',
      status: 'Delivered',
      showCircle: false,
      pickupLocation: 'Los Angeles',
      pickupTime: '1:00pm',
      pickupAddress: '25 Mort',
      pickupDate: '12/09/2023',
      dropoffLocation: 'Chicago',
      dropoffTime: '2:00pm',
      dropoffAddress: '456 Oak street fadiaofjdda fajsdiofjao',
      dropoffDate: '12/09/2023',
      showButtonLeft: false,
      pickupButtonText: "It's time for pickup",
      showButtonRight: true,
      resumeButtonText: 'Resume'
    }
  ];

 //GetterOrderDetails
  getOrderDetails(orderId: string) {
    return this.orders.find(order => order.orderId === orderId);
  }
}

