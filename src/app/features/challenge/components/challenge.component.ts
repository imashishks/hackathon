import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'hack-challenge',
  templateUrl: './challenge.component.html',
  styleUrls: ['./challenge.component.scss'],
})
export class ChallengeComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    console.log('challenge works');
  }
}
