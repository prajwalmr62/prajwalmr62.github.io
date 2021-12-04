import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactBoardComponent } from './contact-board.component';

describe('ContactBoardComponent', () => {
  let component: ContactBoardComponent;
  let fixture: ComponentFixture<ContactBoardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContactBoardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactBoardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
