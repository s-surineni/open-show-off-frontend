import { ActivatedRoute } from '@angular/router';
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

    constructor(private projectService: ProjectService,
                private route: ActivatedRoute) {
    }

    ngOnInit() {
        this.getProjects();
    }

    getProjects(): void {
        const userName = this.route.snapshot.paramMap.get('userName');
        this.areProjectsFetched = false;
        this.projectService.getProjects(userName)
            .subscribe(projects => {
                this.projects = projects;
                this.areProjectsFetched = true;
            });
    }

}
