import { Members } from '../models/members';
import { Component, OnInit } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';

@Component({
    selector: 'app-profile',
    templateUrl: './profile.component.html',
    styleUrls: ['./profile.component.scss'],
    animations: [
        trigger('compState', [
          transition('void => *', [
            style({opacity: 0}),
            animate('1s ease-out')
          ]),
          transition('* => void', [
            animate('1s ease-in'), style({opacity: 0})
          ])
        ]),
        trigger('divState', [
            transition('void => *', [
              style({opacity: 0, transform: 'translate(-100%)'}),
              animate('500ms ease-out')
            ]),
            transition('* => void', [
              animate('500ms ease-in'), style({opacity: 0, transform: 'translateX(100%)'})
            ])
          ])
      ]
})

export class ProfileComponent implements OnInit {

    member: Members;
    state = true;
    statelogin = false;
    toggleState() {

        this.state = !this.state;
        setTimeout(() => {
            this.statelogin = !this.statelogin;
        }, 500);
    }
    toggleStateSignin() {

                this.statelogin = !this.statelogin;
                setTimeout(() => {
                    this.state = !this.state;
                }, 500);
            }
    constructor() { }

    ngOnInit() {
        this.member = JSON.parse(sessionStorage.getItem('member'));
    }

}
