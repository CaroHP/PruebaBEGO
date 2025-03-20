import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-pantalla2',
  imports: [CommonModule, MatCardModule, MatButtonModule, MatIconModule],
  templateUrl: './pantalla2.component.html',
  styleUrl: './pantalla2.component.scss'
})
export class Pantalla2Component {

  //cambiar de pantalla
  constructor(private router: Router) { }

  navegarAPantalla1() {
    this.router.navigate(['/pantalla1']);
  }


  //Funcionalidad Dropdown
  DropdownBehaviour() {
    
  }

}

