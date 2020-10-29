import { Component, OnInit } from '@angular/core';
import { ChallengeService } from 'src/app/shared/services/challenge/challenge.service';

@Component({
  selector: 'hack-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent implements OnInit {
  constructor(private challengeService: ChallengeService) {}

  ngOnInit(): void {
    let listItems = this.challengeService.getChallengesList();
    console.log(listItems);
  }
}
