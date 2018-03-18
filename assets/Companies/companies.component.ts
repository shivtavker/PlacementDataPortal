import { Component, ViewChild } from '@angular/core';
import {CompaniesService} from '../Services/companies.service';

@Component({
    selector: 'companies-component',
    templateUrl: './companies.html',
    styleUrls: ['../../public/stylesheets/companies.component.css']
})

export class CompaniesComponent {

@ViewChild('companyName')companyNameTextBox;

companies = [
    {
        CompanyName: 'Institute-WebOps',
        ID: 1201
    }
]

addCompanyBox = false;

    constructor(private companiesService: CompaniesService){
        this.companiesService.getCompanies()
                .subscribe(res => {
                    console.log(res);
                    this.companies = res.companies;
                    console.log(this.companies);
                });
    }

    addCompany(){
        let companyName= this.companyNameTextBox.nativeElement.value;
        let lastCompanyID= this.companies[this.companies.length - 1].ID;
        let company = {
            name: companyName,
            ID: lastCompanyID + 1
        }
        this.companies.push(company);
        console.log(company);
        this.addCompanyBox =! this.addCompanyBox;
        this.companyNameTextBox.nativeElement.value = '';
        this.companiesService.saveCompany(JSON.stringify(company));
    }
}