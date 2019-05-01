import { Location } from '@angular/common';
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
    userName: string;
    areProjectsFetched = false;

    constructor(private projectService: ProjectService,
        private route: ActivatedRoute,
        private location: Location) {
    }

    ngOnInit() {
        this.getProjects();

    }

    getProjects(): void {
        this.areProjectsFetched = false;
        const userName = this.route.snapshot.paramMap.get('userName');
        if (userName == '') {
            this.projectService.getUserName().subscribe(userName => {
                // this.userName = userName;
                this.location.go('/projects/' + userName);
                console.log('The username is ' + userName);
                this.projectService.getProjects(userName)
                    .subscribe(projects => {
                        this.projects = projects;
                        this.areProjectsFetched = true;
                    });
            });
        } else {
            this.projectService.getProjects(userName)
                .subscribe(projects => {
                    this.projects = projects;
                    this.areProjectsFetched = true;
                });
        }
        // this.projectService.getProjects(userName)
        //     .subscribe(projects => {
        //         this.projects = projects;
        //         this.areProjectsFetched = true;
        //     });
    }

    // getUserName(): void {
    // }

}
