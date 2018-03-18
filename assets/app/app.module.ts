import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { routerModule } from './app.routes';
import {HttpModule} from '@angular/http';

import { AppComponent } from "./app.component";
import {CompaniesComponent} from '../Companies/companies.component';
import {CompanyComponent} from '../Company/company.component';

import {CompaniesService} from '../Services/companies.service';
import {NotesService} from '../Services/notes.service';

@NgModule({
    declarations: [
        AppComponent,
        CompaniesComponent,
        CompanyComponent
    ],
    imports: [
        BrowserModule,
        routerModule,
        HttpModule
    ],
    providers: [
        CompaniesService,
        NotesService
    ],
    bootstrap: [AppComponent]
})
export class AppModule {

}