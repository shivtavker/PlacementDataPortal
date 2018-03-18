import {Routes, RouterModule} from '@angular/router';

import {CompaniesComponent} from '../Companies/companies.component';
import {CompanyComponent} from '../Company/company.component';

const APP_ROUTES : Routes = [
    {path: '', redirectTo: '/companies', pathMatch: 'full'},
    {path: 'companies', component: CompaniesComponent},
    {path: 'company/:name/:id', component: CompanyComponent},
    {path:'**', component: CompaniesComponent}
]

export const routerModule = RouterModule.forRoot(APP_ROUTES);