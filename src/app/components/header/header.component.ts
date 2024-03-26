import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
})
export class HeaderComponent {

  isDropdownOpen: boolean = false;

  toggleDropdown() {
    this.isDropdownOpen = !this.isDropdownOpen;
  }

}
