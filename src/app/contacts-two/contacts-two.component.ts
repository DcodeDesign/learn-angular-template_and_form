import { Component, OnInit } from '@angular/core';
import { trigger, state, style, transition, animate, animation } from '@angular/animations';
import { Contact } from '../models/Contact';

@Component({
  selector: 'app-contacts-two',
  templateUrl: './contacts-two.component.html',
  styleUrls: ['./contacts-two.component.scss'],
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
        opacity : '1'
      })),
      transition(
        'void <=> *', [
          style({
            transform : 'translateY(-100px)', 
            opacity : '0'
          }),
          animate('1000ms ease-in-out')
        ])
    ])
  ]
})
export class ContactsTwoComponent implements OnInit {

  values: string;
  stateCard = 'inactive';
  /*
  contacts = [{ "first_name": "Tatum", "last_name": "Vernon", "email": "tvernon0@lycos.com", "gender": "Female", "company": "Youopia" },
  { "first_name": "Anet", "last_name": "Bellis", "email": "abellis1@cnn.com", "gender": "Female", "company": "Oloo" },
  { "first_name": "Pippa", "last_name": "Goymer", "email": "pgoymer2@ihg.com", "gender": "Female", "company": "Browsecat" },
  { "first_name": "Addison", "last_name": "Lawther", "email": "alawther3@walmart.com", "gender": "Male", "company": "Yoveo" },
  { "first_name": "Anya", "last_name": "Franzman", "email": "afranzman4@bravesites.com", "gender": "Female", "company": "Twitterbeat" }];
  first_name= '';
  last_name= '';
  gender= '';
  email= '';
  company= '';
  */

  companies = ['Linkedin', 'Manny Design', 'Apple'];
  model: any = [new Contact('Manny', 'Henri', 'manny-henri@gmail.com', 'Male', this.companies[0])];

  constructor() { }

  ngOnInit(): void {
  }

  onkey(e: any) {
    this.values = e.target.value;
  }

  /*
  addContact(value: any) {
    this.contacts.unshift({
      first_name: value.first_name,
      last_name: value.last_name,
      email: value.gender,
      gender: value.email,
      company: value.company
    })
    this.first_name= '';
    this.last_name= '';
    this.gender= '';
    this.email= '';
    this.company= '';
  }
  */

  onSubmit(value: any) {
    this.model.unshift(new Contact(
        value.first_name,
        value.last_name,
        value.gender,
        value.email,
        value.company
      ))
    }
}
