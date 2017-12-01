import { Component, OnInit } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss'],
    animations: [
        trigger('divState', [
          transition('void => *', [
            style({opacity: 0}),
            animate('1000ms ease-out')
          ]),
          transition('* => void', [
            animate('1000ms ease-out'), style({opacity: 0})
          ])
        ])
      ]
})

export class HomeComponent implements OnInit {


    status = true;
    toggleState() {

        this.status = !this.status;
    }


    model = {
        left: true,
        middle: false,
        right: false
    };
    constructor() { }

    ngOnInit() {}
}
