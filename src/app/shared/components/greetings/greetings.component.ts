import { Component, OnInit, Input } from '@angular/core';
import { DataSharingService } from '../../services/data-sharing/data-sharing.service';
import { GreetingsModel } from '../../models/config.model';

@Component({
  selector: 'hack-greetings',
  templateUrl: './greetings.component.html',
  styleUrls: ['./greetings.component.scss'],
})
export class GreetingsComponent implements OnInit {
  constructor() {}
  @Input() config: GreetingsModel;
  private defaultConfig = {
    header: [''],
  };
  ngOnInit(): void {
    this.config = { ...this.defaultConfig, ...this.config };
  }
}
