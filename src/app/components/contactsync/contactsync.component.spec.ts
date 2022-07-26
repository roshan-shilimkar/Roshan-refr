import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactsyncComponent } from './contactsync.component';

describe('ContactsyncComponent', () => {
  let component: ContactsyncComponent;
  let fixture: ComponentFixture<ContactsyncComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContactsyncComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactsyncComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
