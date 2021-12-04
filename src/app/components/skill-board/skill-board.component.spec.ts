import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SkillBoardComponent } from './skill-board.component';

describe('SkillBoardComponent', () => {
  let component: SkillBoardComponent;
  let fixture: ComponentFixture<SkillBoardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SkillBoardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SkillBoardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
