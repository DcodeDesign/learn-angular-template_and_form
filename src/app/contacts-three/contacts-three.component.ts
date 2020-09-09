import { Component, OnInit } from '@angular/core';
import { trigger, state, style, transition, animate, animation } from '@angular/animations';
import { FormControl, FormGroup } from '@angular/forms';

import { Contact } from '../models/Contact';

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
export class ContactsThreeComponent implements OnInit {

  compagnies = ['Linkendin','Moi','Toi']
  stateCard = 'inactive';
  companies = ['Linkedin', 'Manny Design', 'Apple'];
  model: any = [new Contact('Manny', 'Henri', 'manny-henri@gmail.com', 'Male', this.companies[0])];

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(value: any) {
    this.model.unshift(new Contact(
        value.first_name,
        value.last_name,
        value.gender,
        value.email,
        value.company
      ))
    }

    reactForm: any = new FormGroup({
        first_name: new FormControl(),
        last_name: new FormControl(),
        email: new FormControl(),
        gender: new FormControl(),
        company: new FormControl()
    });

}
