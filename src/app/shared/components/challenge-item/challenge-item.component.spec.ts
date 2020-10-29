import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChallengeItemComponent } from './challenge-item.component';

describe('ChallengeItemComponent', () => {
  let component: ChallengeItemComponent;
  let fixture: ComponentFixture<ChallengeItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChallengeItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChallengeItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
