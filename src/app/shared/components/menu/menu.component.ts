import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'hack-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent implements OnInit {
  constructor(private router: Router) {}
  btnConfig = {
    type: 'transparent-light',
    disabled: false,
  };
  showFiller = false;
  ngOnInit(): void {}
  signOut() {
    this.router.navigate(['/']);
  }
  getMenuItems() {
    return MENU_ITEMS;
  }
  menuItemClicked(item) {
    switch (item.key) {
      case 'add':
        this.router.navigate(['/challenge/add']);
        break;
      case 'manage':
        this.router.navigate(['/challenge/manage']);
        break;
      case 'dashboard':
        this.router.navigate(['/dashboard']);
        break;
    }
  }
}

const MENU_ITEMS = [
  {
    key: 'dashboard',
    value: 'Browse Challenges',
  },
  {
    key: 'add',
    value: 'Add Challenge',
  },
  {
    key: 'manage',
    value: 'Manage Challenge',
  },
];
