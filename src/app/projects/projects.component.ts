import { Component, OnInit } from '@angular/core';

import { Project } from '../project';

import { ProjectService } from '../project.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {
    projects: Project[];
    areProjectsFetched = false;

    constructor(private projectService: ProjectService) { }

    ngOnInit() {
        this.getProjects();
    }

    getProjects(): void {
        this.areProjectsFetched = false;
        this.projectService.getProjects()
            .subscribe(projects => {
                this.projects = projects;
                this.areProjectsFetched = true;
            });
    }

}