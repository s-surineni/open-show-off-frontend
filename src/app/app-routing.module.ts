import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ProjectsComponent } from './projects/projects.component';
import { ProjectDetailComponent } from './project-detail/project-detail.component';


const routes: Routes = [
    { path: '', redirectTo: '/projects', pathMatch: 'full' },
    { path: 'detail/:id', component: ProjectDetailComponent },
    // see if both can be combined into one
    { path: 'projects', redirectTo: 'projects/', pathMatch: 'full' },
    { path: 'projects/:userName', component: ProjectsComponent },

];


@NgModule({
    exports: [ RouterModule ],
    imports: [ RouterModule.forRoot(routes) ],
})
export class AppRoutingModule {

}
