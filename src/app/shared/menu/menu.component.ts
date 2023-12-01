import { Component } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent {
  menuClicked = false;
  showbars = true;

  openMenu() {
    this.menuClicked = true;
    this.showbars = false;
  }

  closeMenu() {
    this.menuClicked = false;
    this.showbars = true;
  }
}
