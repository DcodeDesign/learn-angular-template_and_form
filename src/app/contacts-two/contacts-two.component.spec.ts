import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactsTwoComponent } from './contacts-two.component';

describe('ContactsTwoComponent', () => {
  let component: ContactsTwoComponent;
  let fixture: ComponentFixture<ContactsTwoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContactsTwoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactsTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
