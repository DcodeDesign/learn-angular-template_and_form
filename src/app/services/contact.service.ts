import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Contact, Contacts } from '../interfaces/contact'
@Injectable({
  providedIn: 'root'
})
export class ContactService {

  constructor() { }

  getContacts(): Observable<Contact[]> {
    return of(Contacts).pipe();
  }

  addContacts(contact: Contact) {
    const newContacts = Contacts.unshift(contact);
    return of(newContacts).pipe();

  } 
}
