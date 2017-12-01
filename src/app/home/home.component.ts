import { Component, OnInit } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss'],
    animations: [
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

export class HomeComponent implements OnInit {

    model = {
        left: true,
        middle: false,
        right: false
    };
    state = true;
    statelogin = false;
    toggleState() {

        this.state = !this.state;
        setTimeout(() => {
            this.statelogin = !this.statelogin;
        }, 500);
    }
    toggleStateLogin() {

                this.statelogin = !this.statelogin;
                setTimeout(() => {
                    this.state = !this.state;
                }, 500);
            }


    constructor() { }

    ngOnInit() {}
}
