import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KYCdocumnetComponent } from './kycdocumnet.component';

describe('KYCdocumnetComponent', () => {
  let component: KYCdocumnetComponent;
  let fixture: ComponentFixture<KYCdocumnetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KYCdocumnetComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KYCdocumnetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
