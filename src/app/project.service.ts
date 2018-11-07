import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';

import { MessageService } from './message.service';
import { Project } from './project';
import { PROJECTS } from './mock-projects';


@Injectable({
    providedIn: 'root',
})
export class ProjectService {

    private projectsUrl = 'github';
    
    getProjects(): Observable<Project[]> {
        this.messageService.add('ProjectService: fetched projects');
        return this.http.get<Project[]>(this.projectsUrl);
    }

    getProject(id: number): Observable<Project> {
        this.messageService.add(`ProjectService: fetched project id=${id}`);
        return of(PROJECTS.find(project => project.id === id));
    }
    
    constructor(
        private http: HttpClient,
        private messageService: MessageService
    ) { }

    private log(message: string) {
        this.messageService.add(`ProjectService: ${message}`);
    }
}
