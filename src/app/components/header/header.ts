import { Component } from '@angular/core';
import { GlobalData } from '../../services/global-data';

@Component({
  selector: 'app-header',
  imports: [],
  templateUrl: './header.html',
  styleUrl: './header.scss',
})
export class Header   {
  // estado del menú (false = cerrado, true = abierto)
  isMenuOpen = false;
  darkMode = false;

constructor(private gd: GlobalData) {}

toggleDarkMode() {
  this.gd.toggleDarkMode(); // llama al servicio global
}

  // método llamado desde la plantilla (click)
  navegacionResponsive() {// alterna el estado del menú
    // si está cerrado (false), lo abre (true) y viceversa
    this.isMenuOpen = !this.isMenuOpen;
  }


   
  
}
