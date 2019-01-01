import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable, isDevMode } from '@angular/core';

import { Observable, of } from 'rxjs';

import { MessageService } from './message.service';
import { Project } from './project';
import { PROJECTS } from './mock-projects';

@Injectable({
    providedIn: 'root',
})
export class ProjectService {

    private projectsUrl = 'github/';
    
    getProjects(userName: string): Observable<Project[]> {
        if ( isDevMode() ) {
            return of(PROJECTS);
        } else {
            return this.http.get<Project[]>(this.projectsUrl + userName);
        }
    }

    getProject(id: number): Observable<Project> {
        this.messageService.add(`ProjectService: fetched project id=${id}`);
        return of({'id': 1,
                   'stars': 100,
                   'name': 'Emacs',
                   description: 'This is the awesomest project',
                    'avatar': "https://avatars2.githubusercontent.com/u/19891160?v=4"});
    }
    
    constructor(
        private http: HttpClient,
        private messageService: MessageService
    ) { }

    private log(message: string) {
        this.messageService.add(`ProjectService: ${message}`);
    }
}
