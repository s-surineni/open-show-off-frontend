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
    private userNameUrl = 'github/userName/';
    getProjects(userName: string): Observable<Project[]> {
        if (isDevMode()) {
            return of(PROJECTS);
        } else {
            return this.http.get<Project[]>(this.projectsUrl + userName);
        }
    }

    getUserName(): Observable<string> {
        if (isDevMode()) {
            return of('s-surineni');
        } else {
            return this.http.get<string>(this.userNameUrl);
        }
    }

    getProject(id: number): Observable<Project> {
        this.messageService.add(`ProjectService: fetched project id=${id}`);
        return of({"id": 43160685, "name": "zulip", "stars": 9702, "description": "Zulip server - powerful open source team chat", "avatar": "https://avatars2.githubusercontent.com/u/4921959?v=4", "html_url": "https://github.com/zulip/zulip"});
    }

    constructor(
        private http: HttpClient,
        private messageService: MessageService
    ) { }

    private log(message: string) {
        this.messageService.add(`ProjectService: ${message}`);
    }
}
