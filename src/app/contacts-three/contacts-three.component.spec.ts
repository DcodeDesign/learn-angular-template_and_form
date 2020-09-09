import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactsThreeComponent } from './contacts-three.component';

describe('ContactsThreeComponent', () => {
  let component: ContactsThreeComponent;
  let fixture: ComponentFixture<ContactsThreeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContactsThreeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactsThreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
