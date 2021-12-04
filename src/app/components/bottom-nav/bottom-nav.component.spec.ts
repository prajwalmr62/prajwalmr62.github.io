import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BottomNavComponent } from './bottom-nav.component';

describe('BottomNavComponent', () => {
  let component: BottomNavComponent;
  let fixture: ComponentFixture<BottomNavComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BottomNavComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BottomNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
