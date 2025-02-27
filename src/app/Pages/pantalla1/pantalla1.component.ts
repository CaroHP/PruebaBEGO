import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-pantalla1',
  standalone:true,
  imports: [CommonModule],
  templateUrl: './pantalla1.component.html',
  styleUrl: './pantalla1.component.scss'
})

export class Pantalla1Component {
  tabs: string[] = ['Upcoming', 'Completed', 'Past'];
  activeTabIndex: number = 0;

  // Método para cambiar la pestaña activa
  setActiveTab(index: number): void {
    this.activeTabIndex = index;
  }

  // Cards
  orders = [
    {
      orderId: '#7804GNZ',
      type: 'FCL',
      status: 'In Transit',
      pickupLocation: 'New York',
      pickupTime: '12:00pm',
      pickupAddress: '25 Mortada street',
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
      pickupLocation: 'Los Angeles',
      pickupTime: '1:00pm',
      pickupAddress: '123 Sunset Blvd',
      pickupDate: '15/09/2023',
      dropoffLocation: 'Chicago',
      dropoffTime: '2:00pm',
      dropoffAddress: '456 Oak Street',
      dropoffDate: '16/09/2023',
      showButtonLeft: false,
      pickupButtonText: "It's time for pickup",
      showButtonRight: true,
      resumeButtonText: 'Resume'
    }
  ];

  // Método para acceder a los detalles de cada orden
  getOrderDetails(orderId: string) {
    return this.orders.find(order => order.orderId === orderId);
  }
}
