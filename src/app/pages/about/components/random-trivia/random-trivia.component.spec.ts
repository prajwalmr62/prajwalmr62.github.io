import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RandomTriviaComponent } from './random-trivia.component';

describe('RandomTriviaComponent', () => {
  let component: RandomTriviaComponent;
  let fixture: ComponentFixture<RandomTriviaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RandomTriviaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RandomTriviaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
