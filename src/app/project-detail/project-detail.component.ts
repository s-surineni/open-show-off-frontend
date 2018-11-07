import { Location } from '@angular/common';
import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Project } from '../project';
import { ProjectService } from '../project.service';

@Component({
  selector: 'app-project-detail',
  templateUrl: './project-detail.component.html',
  styleUrls: ['./project-detail.component.css']
})
export class ProjectDetailComponent implements OnInit {

    @Input() project: Project;
    
    constructor(private route: ActivatedRoute,
                private projectService: ProjectService,
                private location: Location) { }

    ngOnInit() {
        this.getProject();
    }

    getProject(): void {
        const id = +this.route.snapshot.paramMap.get('id');
        this.projectService.getProject(id)
            .subscribe(project => this.project = project);
    }

    goBack(): void {
        this.location.back();
    }

}
