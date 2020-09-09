import { Component, OnInit } from '@angular/core';
import { trigger, state, style, transition, animate, animation } from '@angular/animations';
import { FormControl, FormGroup, FormBuilder, Validator, Validators } from '@angular/forms';

import { ContactService } from '../services/contact.service'
import { Contact } from '../interfaces/contact';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-contacts-three',
  templateUrl: './contacts-three.component.html',
  styleUrls: ['./contacts-three.component.scss'],
  animations: [
    //headerAnimation
    trigger('headerAnimation', [
      state('inactive', style({
        transform: 'scale(1)'
      })),
      state('active', style({
        transform: 'scale(1.5)'
      })),
      //transition('active => inactive', animate('900ms 100ms ease-in')),
      transition('active <=> inactive', animate('900ms 100ms ease-in')),
    ]),
    //contactAnimation
    trigger('contactAnimation', [
      state('active', style({
        opacity: '1'
      })),
      transition(
        'void <=> *', [
        style({
          transform: 'translateY(-100px)',
          opacity: '0'
        }),
        animate('1000ms ease-in-out')
      ])
    ])
  ]
})
export class ContactsThreeComponent implements OnInit {

  compagnies = ['Linkendin', 'Moi', 'Toi']
  stateCard = 'inactive';
  companies = ['Linkedin', 'Manny Design', 'Apple'];
  model: any = [new Contact('Manny', 'Henri', 'manny-henri@gmail.com', 'Male', this.companies[0])];
  contacts: Contact[];

  reactForm: FormGroup;

  constructor(private formBuilder: FormBuilder,
    private contactService: ContactService) {
    this.createForm();
  }

  createForm() {
    this.reactForm = this.formBuilder.group({
      first_name: ['', Validators.compose([Validators.required, Validators.minLength(5)])],
      last_name:  ['', Validators.compose([Validators.required, Validators.minLength(5)])],
      email:  ['', Validators.compose([Validators.required, Validators.minLength(5)])],
      gender:  ['', Validators.required],
      company:  ''
    })
  }

  ngOnInit(): void {
    this.getContacts();
  }

  getContacts() {
    this.contactService.getContacts().subscribe(
      data => { this.contacts = data },
      err => console.log(err)
    )
  }

  onSubmit() {
    let contactForm = this.reactForm.value;
    const contact: Contact = {
      first_name: contactForm.first_name,
      last_name: contactForm.last_name,
      gender: contactForm.gender,
      email: contactForm.email,
      company: contactForm.company
    }

    this.contactService.addContacts(contact).subscribe(
      data => {
        this.getContacts();
        return true;
      },
      err => {
        console.log(': Error saving contact.');
        return Observable.throw(err);
      }
    );
    this.rebuildForm();
  }

  rebuildForm() {
    this.reactForm.reset({
      first_name: '',
      last_name: '',
      gender: '',
      email: '',
      company: ''
    })
  }


  /*
  reactForm: any = new FormGroup({
      first_name: new FormControl(),
      last_name: new FormControl(),
      email: new FormControl(),
      gender: new FormControl(),
      company: new FormControl()
  });
  */

}
