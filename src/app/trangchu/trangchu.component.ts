import { Component } from '@angular/core';

@Component({
  selector: 'app-trangchu',
  templateUrl: './trangchu.component.html',
  styleUrl: './trangchu.component.css'
})
export class TrangchuComponent {
  isNavbarVisible = true;
  
  toggleNavbar() {
    this.isNavbarVisible = !this.isNavbarVisible;
  }
 
}
