import { animate, style, transition, trigger } from '@angular/animations';
import { ProjectService } from '../services/project/project.service';
import { Project } from '../models/project';
import { Component, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-project-details',
  templateUrl: './project-details.component.html',
  styleUrls: ['./project-details.component.css'],
  providers: [ ProjectService ],
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
export class ProjectDetailsComponent implements OnInit {
  project: Project = new Project();

  constructor(
    private projectService: ProjectService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    this.projectService.getProject(id).subscribe(project => this.project = project);
  }
}
