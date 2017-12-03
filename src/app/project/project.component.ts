import { ProjectService } from './../services/project/project.service';
import { Project } from '../models/project';
import { Component, OnInit } from '@angular/core'
import { trigger, state, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css'],
  providers: [ ProjectService ],
  animations: [
    trigger('compState', [
        transition('void => *', [
          style({opacity: 0}),
          animate('1.5s ease-out')
        ]),
        transition('* => void', [
          animate('1s ease-in'), style({opacity: 0}),
        ])
      ]),
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



export class ProjectComponent implements OnInit {

  projects: Project[];

  constructor(private projectService: ProjectService) { }

  ngOnInit() {
    this.projectService.getProjects().forEach(project => this.projects = project);
  }

}
