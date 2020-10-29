import { Component, OnInit } from '@angular/core';
import { DataSharingService } from 'src/app/shared/services/data-sharing/data-sharing.service';
import { GreetingsModel } from 'src/app/shared/models/config.model';
import { AuthService } from 'src/app/shared/services/auth/auth.service';

@Component({
  selector: 'hack-challenge',
  templateUrl: './challenge.component.html',
  styleUrls: ['./challenge.component.scss'],
})
export class ChallengeComponent implements OnInit {
  constructor(
    private dataSharing: DataSharingService,
    private authService: AuthService
  ) {}
  greetingsConfig: GreetingsModel;
  ngOnInit(): void {}
}
