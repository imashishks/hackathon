import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/shared/services/auth/auth.service';
import { GreetingsModel } from '../../../../shared/models/config.model';
import { DataSharingService } from 'src/app/shared/services/data-sharing/data-sharing.service';
@Component({
  selector: 'hack-manage',
  templateUrl: './manage.component.html',
  styleUrls: ['./manage.component.scss'],
})
export class ManageComponent implements OnInit {
  constructor(
    private authService: AuthService,
    private dataSharing: DataSharingService
  ) {}

  ngOnInit(): void {
    this.setGreetingsConfig();
  }
  setGreetingsConfig() {
    const user = this.authService.currentUserData;
  }
}
