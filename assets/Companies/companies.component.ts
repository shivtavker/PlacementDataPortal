import { Component, ViewChild } from '@angular/core';

@Component({
    selector: 'companies-component',
    templateUrl: './companies.html',
    styleUrls: ['../../public/stylesheets/companies.component.css']
})

export class CompaniesComponent {

@ViewChild('companyName')companyNameTextBox;

companies = [
    {
        name: 'Google',
        ID: 1201
    },
    {
        name: 'Facebook',
        ID: 1202 
    }
]

addCompanyBox = false;

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
}

}