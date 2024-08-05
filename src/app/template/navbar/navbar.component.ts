import { Component, OnInit, AfterViewInit } from '@angular/core';
import { faBars } from '@fortawesome/free-solid-svg-icons';
declare var $: any;

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit, AfterViewInit {
  isSidebarCollapsed = false;
  fabars= faBars;
  isSubMenuCollapsed: boolean = true;
  isSubMenuVisible: boolean = false;

  constructor() {}

  ngOnInit() {}

  ngAfterViewInit() {
    $(document).ready(() => {
      $('#sidebarCollapse').on('click', () => {
        this.isSidebarCollapsed = !this.isSidebarCollapsed;
        this.handleButtonClick();
        this.toggleSidebar(); // Gọi hàm để điều khiển hiển thị sidebar
      });
    });
  }
  
  toggleSidebar() {
    $('#sidebar').toggleClass('active');
  }

  handleButtonClick() {
    console.log('Button clicked!');
  }
  sites : string[] = [
    'fabars'
  ]
  toggleSubMenu(submenuId: string) {
    const submenu = document.getElementById(submenuId);
    if (submenu) {
        submenu.classList.toggle('show');
    }
}
  
}