import { MemberService } from './../../services/member/member.service';
import { Members } from '../../models/members';

import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css'],
  providers:[MemberService],
})
export class SigninComponent implements OnInit {

  @Output() toggleSignin: EventEmitter<any> =  new EventEmitter();
  members: Members[];
  loginmember: Members;
  member: Members = new Members();
  constructor(private memberService: MemberService) { }

  toggle(): void {
    this.toggleSignin.emit(null);
  }


  onSubmit(): void
  {
    this.loginmember = this.members.find(mem => this.member.email === mem.email);
    if(this.loginmember === undefined)
    {
      console.log('failure');
    }
    else
    {
      console.log('success');
    }
  }
  ngOnInit() {
    this.memberService.getMembers().forEach(members => this.members = members);
  }

}
