import { Project } from '../models/project';
import { MemberService } from './../services/member/member.service';
import { ActivatedRoute } from '@angular/router';
import { Members } from '../models/members';
import { Component, OnInit } from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition
} from '@angular/animations';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
  providers: [MemberService],
  animations: [
    trigger('compState', [
      transition('void => *', [
        style({ opacity: 0 }),
        animate('1.5s ease-out')
      ]),
      transition('* => void', [animate('1s ease-in'), style({ opacity: 0 })])
    ]),
    trigger('divState', [
      transition('void => *', [
        style({ opacity: 0, transform: 'translate(-100%)' }),
        animate('500ms ease-out')
      ]),
      transition('* => void', [
        animate('500ms ease-in'),
        style({ opacity: 0, transform: 'translateX(100%)' })
      ])
    ])
  ]
})
export class ProfileComponent implements OnInit {
  member: Members;
  project = [
    {
      id: 2,
      name: 'Pls work',
      status: 'Done',
      description: 'You have reached Dennaton Enterprises, we can\'t take your call at the moment. Please leave a message after the beep and we\'ll get back to you. ',
      team: [
        {
          id: 11,
          name: 'Achref',
          lastname: 'Haouech',
          description: 'Retard at work.',
          level: '3',
          phone: 3251,
          section: 'GL',
          manageteams: [],
          email: 'haouech@outlook.com',
          password: 'somepass',
          role: 'webmaster'
        },
        {
          id: 12,
          name: 'Narco',
          lastname: 'torj',
          level: '3',
          phone: 3250,
          section: 'GL',
          manageteams: [],
          email: 'haouech@gmail.com',
          password: 'someotherpass'
        }
      ]
    },
    {
      id: 3,
      name: 'isa tool 2',
      status: 'Dropped',
      team: [
        {
          id: 11,
          name: 'Achref',
          lastname: 'Haouech',
          description: 'Retard at work.',
          level: '3',
          phone: 3251,
          section: 'GL',
          manageteams: [],
          email: 'haouech@outlook.com',
          password: 'somepass',
          role: 'webmaster'
        },
        {
          id: 12,
          name: 'Narco',
          lastname: 'torj',
          level: '3',
          phone: 3250,
          section: 'GL',
          manageteams: [],
          email: 'haouech@gmail.com',
          password: 'someotherpass'
        }
      ]
    },
  ]
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
  constructor(
    private route: ActivatedRoute,
    private memberService: MemberService
  ) {}

  ngOnInit() {
    this.member = JSON.parse(sessionStorage.getItem('member'));
    if (this.member === null) {
      const id = +this.route.snapshot.paramMap.get('id');
      this.memberService
        .getMember(id)
        .subscribe(member => (this.member = member));
    }
  }
}
