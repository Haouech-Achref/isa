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
})
export class ProjectDetailsComponent implements OnInit {

  project: Project = new Project();

  constructor(private projectService: ProjectService,
    private route: ActivatedRoute, ) { }

  ngOnInit() {
    const id = +this.route.snapshot.paramMap.get('id');
    this.projectService.getProject(id).forEach(project => this.project = project);
  }

}
