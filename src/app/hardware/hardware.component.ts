import { HardwareService } from './../services/hardware/hardware.service';
import { Hardware } from '../models/hardware';
import { Component, OnInit } from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition
} from '@angular/animations';

@Component({
  selector: 'app-hardware',
  templateUrl: './hardware.component.html',
  styleUrls: ['./hardware.component.css'],
  providers: [HardwareService],
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
export class HardwareComponent implements OnInit {
  hardwares: Hardware[];



  constructor(private hardwareService: HardwareService) {}

  ngOnInit() {
    this.hardwareService.getHardwares().subscribe(hardware => {
      this.hardwares = hardware;
    });
  }
}
