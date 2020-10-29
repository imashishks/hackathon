import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth/auth.service';
import { UserData } from '../../models/onboarding.model';

@Component({
  selector: 'hack-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent implements OnInit {
  user: UserData;
  constructor(private router: Router, private authService: AuthService) {}
  btnConfig = {
    type: 'transparent-light',
    disabled: false,
  };
  showFiller = false;
  ngOnInit(): void {
    this.getUser();
  }
  getUser() {
    this.user = this.authService.currentUserData;
    console.log(this.user);
  }
  signOut() {
    this.authService.logout();
    this.router.navigate(['/onboarding']);
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
      case 'list':
        this.router.navigate(['/challenge/list']);
        break;
    }
  }
}

const MENU_ITEMS = [
  {
    key: 'list',
    value: 'Browse Challenges',
  },
  {
    key: 'add',
    value: 'Add Challenge',
  },
  // {
  //   key: 'manage',
  //   value: 'Manage Challenge',
  // },
];
