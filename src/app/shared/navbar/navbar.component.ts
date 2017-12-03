import { Members } from './../../models/members';
import { Component, ElementRef, Input, OnInit } from '@angular/core';
import { Location, LocationStrategy, PathLocationStrategy } from '@angular/common';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { NavigationEnd } from '@angular/router';

@Component({
    selector: 'app-navbar',
    templateUrl: './navbar.component.html',
    styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

    loggedin: boolean;
    member: Members = null;
    id: string
    constructor(public location: Location, private element: ElementRef, private router: Router) {
    }

    ngOnInit() {

        const navbar: HTMLElement = this.element.nativeElement;

        this.router.events
        .filter(event => (event instanceof NavigationEnd))
            .subscribe(() => {
                this.member = JSON.parse(sessionStorage.getItem('member'));
                this.id = this.member === null ? '' : String(this.member.id);
                this.loggedin = this.member === null ? false : true;
            });
    }





}
