import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { routerModule } from './app.routes';

import { AppComponent } from "./app.component";
import {CompaniesComponent} from '../Companies/companies.component';
import {CompanyComponent} from '../Company/company.component';

@NgModule({
    declarations: [
        AppComponent,
        CompaniesComponent,
        CompanyComponent
    ],
    imports: [
        BrowserModule,
        routerModule
    ],
    bootstrap: [AppComponent]
})
export class AppModule {

}