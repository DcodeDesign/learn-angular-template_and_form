import { Component, OnInit } from '@angular/core';
import { trigger, state, style, transition, animate, animation } from '@angular/animations';

@Component({
  selector: 'app-animate',
  templateUrl: './animate.component.html',
  styleUrls: ['./animate.component.scss'],
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
    ])
  ]
})
export class AnimateComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  paraStyle = {
    'color' : 'Red',
    'font-size' : '20px'
  }

  background = "green";

  buttonState= true;
  headerState= 'inactive';
  animate () {
    this.buttonState = (this.buttonState ? false : true);
  }

  headerAnimate () {
    this.headerState = (this.headerState === 'inactive' ? 'active' : 'inactive');
  }

}
