import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OpeningtimeComponent } from './openingtime.component';

describe('OpeningtimeComponent', () => {
  let component: OpeningtimeComponent;
  let fixture: ComponentFixture<OpeningtimeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OpeningtimeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OpeningtimeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
