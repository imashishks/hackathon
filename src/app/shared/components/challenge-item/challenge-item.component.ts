import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'hack-challenge-item',
  templateUrl: './challenge-item.component.html',
  styleUrls: ['./challenge-item.component.scss'],
})
export class ChallengeItemComponent implements OnInit {
  constructor() {}
  btnConfig = {
    type: 'primary-outlined',
    disbaled: false,
  };
  highlightUpvoteIcon = false;
  @Input('challengeData') data: any;
  @Output() challengeItemClicked = new EventEmitter<any>();
  ngOnInit(): void {}
  getBtnConfig(isSolved: boolean) {
    const config = {
      type: isSolved ? 'primary' : 'primary-outlined',
    };
    return { ...this.btnConfig, ...config };
  }

  upVoteIconClicked() {
    console.log(this.highlightUpvoteIcon);
    this.highlightUpvoteIcon = !this.highlightUpvoteIcon;
  }
  itemClicked(data) {
    this.challengeItemClicked.emit(data);
  }
}
