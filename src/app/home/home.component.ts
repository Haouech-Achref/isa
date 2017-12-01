import { Component, OnInit } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss'],
    animations: [
        trigger('divState', [
            state('fadein', style({
                opacity: 1,
            })),
            state('fadeout',   style({
                opacity: 0,
            })),
            transition('fadeout => fadein', animate('500ms ease-in')),
            transition('fadein => fadeout', animate('500ms ease-out'))
          ])
    ]
})

export class HomeComponent implements OnInit {



    public state = 'fadein';
    public reversestate = 'fadeout'
    toggleState() {

        this.state = this.state === 'fadein' ? 'fadeout' : 'fadein';
        this.reversestate = this.reversestate === 'fadeout' ? 'fadein' : 'fadeout';
    }


    model = {
        left: true,
        middle: false,
        right: false
    };
    constructor() { }

    ngOnInit() {}
}
