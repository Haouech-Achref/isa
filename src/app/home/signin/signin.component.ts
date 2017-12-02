import { Router } from '@angular/router';
import { MemberService } from './../../services/member/member.service';
import { Members } from '../../models/members';
import { trigger, state, style, animate, transition } from '@angular/animations';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css'],
  providers:[ MemberService ],
  animations: [
    trigger('divState', [
      transition('void => *', [
        style({opacity: 0}),
        animate('500ms ease-out')
      ]),
      transition('* => void', [
        animate('500ms ease-in'), style({opacity: 0})
      ])
    ])
  ]
})
export class SigninComponent implements OnInit {

  @Output() toggleSignin: EventEmitter<any> =  new EventEmitter();
  failure: boolean;
  members: Members[];
  loginmember: Members;
  member: Members = new Members();
  constructor(private memberService: MemberService, private router: Router) { }

  toggle(): void {
    this.toggleSignin.emit(null);
  }


  onSubmit(): void
  {
    this.loginmember = this.members.find(mem => this.member.email === mem.email);
    if (this.loginmember === undefined || this.loginmember.password !== this.member.password)
    {
      this.failure = true;
    }
    else {
      sessionStorage.setItem('member', JSON.stringify(this.loginmember));
      this.router.navigate(['profile/', this.loginmember.id])
    }
  }
  ngOnInit() {
    this.memberService.getMembers().forEach(members => this.members = members);
  }

}
