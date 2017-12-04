import { Members } from './../../models/members';
import { Component, ElementRef, Input, OnInit } from '@angular/core';
import { Location, LocationStrategy, PathLocationStrategy } from '@angular/common';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { NavigationEnd } from '@angular/router';
import { HostListener} from '@angular/core';

@Component({
    selector: 'app-navbar',
    templateUrl: './navbar.component.html',
    styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

    onHeader = true;
    loggedin: boolean;
    member: Members = null;
    id: string
    constructor(public location: Location, private element: ElementRef, private router: Router) {
    }
    @HostListener('window:scroll', [])
    onWindowScroll() {
     // we'll do some stuff here when the window is scrolled
     this.onHeader = (document.documentElement.scrollTop || document.body.scrollTop) > 0 ? false : true;
    }

    ngOnInit() {

        const navbar: HTMLElement = this.element.nativeElement;

        // Shows profile button if logged in, else hides it.
        this.router.events
        .filter(event => (event instanceof NavigationEnd))
            .subscribe(() => {
                this.member = JSON.parse(sessionStorage.getItem('member'));
                this.id = this.member === null ? '' : String(this.member.id);
                this.loggedin = this.member === null ? false : true;
            });
    }





}
document.documentElement.scrollTop || document.body.scrollTop