import {Injectable} from '@angular/core';
import {Http, Headers} from '@angular/http';
import {Observable} from 'rxjs/Rx';
import 'rxjs/add/operator/map';

@Injectable()

export class CompaniesService {

urlPost= 'http://localhost:8080/companies';
urlGet= 'http://localhost:8080/companies/get'

    constructor(private http: Http){

    }

    getCompanies(): Observable<Object>{
        return this.http.get(this.urlGet)
                    .map(res => res.json());
    }

    saveCompany(company){
        const headers = new Headers({'Content-Type': 'application/json'});
        this.http.post(this.urlPost, company, {headers: headers})
                    .subscribe(res => {
                        console.log(res)
                    },err => {
                            console.log(err);
                    });
    }

}