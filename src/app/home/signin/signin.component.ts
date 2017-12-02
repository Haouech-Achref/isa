import { Members } from '../../models/members';

import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  @Output() toggleSignin: EventEmitter<any> =  new EventEmitter();

  member: Members = new Members();
  constructor() { }

  toggle(): void {
    this.toggleSignin.emit(null);
  }


  onSubmit(): void
  {
    console.log('success');
  }
  ngOnInit() {
    
  }

}
