import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';

import {
    MatButtonModule,
    MatProgressSpinnerModule,
    MatCardModule
} from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { ProjectsComponent } from './projects/projects.component';
import { ProjectDetailComponent } from './project-detail/project-detail.component';
import { AppRoutingModule } from './app-routing.module';
import { HeaderComponent } from './header/header.component';



@NgModule({
    exports: [
        MatButtonModule,
        MatProgressSpinnerModule,
        MatCardModule
    ],
    declarations: []
})
export class MaterialModule { }


@NgModule({
    declarations: [
        AppComponent,
        ProjectsComponent,
        ProjectDetailComponent,
        HeaderComponent
    ],
    exports: [MatProgressSpinnerModule,
        MatCardModule],
    imports: [
        BrowserModule,
        AppRoutingModule,
        MaterialModule,
        HttpClientModule,
        BrowserAnimationsModule,
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
