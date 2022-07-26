import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TimestampcompareComponent } from './timestampcompare.component';

describe('TimestampcompareComponent', () => {
  let component: TimestampcompareComponent;
  let fixture: ComponentFixture<TimestampcompareComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TimestampcompareComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TimestampcompareComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
