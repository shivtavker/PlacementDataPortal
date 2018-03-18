import {Injectable} from '@angular/core';
import {Http, Headers} from '@angular/http';
import {Observable} from 'rxjs/Rx';
import 'rxjs/add/operator/map';

@Injectable()

export class NotesService {

urlPost= 'http://localhost:8080/company';
urlGet= 'http://localhost:8080/company/get';
urlPatch= 'http://localhost:8080/company/edit';
urlDelete= 'http://localhost:8080/company/delete';

    constructor(private http: Http){
        
    }

    getNotes(companyID): Observable<Object>{
        return this.http.get(this.urlGet)
                    .map(res => res.json());
    }

    saveNote(note){
        const headers = new Headers({'Content-Type': 'application/json'});
        this.http.post(this.urlPost, note, {headers: headers})
                    .subscribe(res => {
                        console.log(res);
                    },err => {
                        console.log(err);
                    });
    }

    editNote(newnote, noteID){
        console.log('Edit Note Srvice');
        const headers = new Headers({'Content-Type': 'application/json'});
        this.http.patch(this.urlPatch + '?noteID=' + noteID, newnote, {headers: headers})
                    .subscribe(res => {
                        console.log(res);
                    },err => {
                        console.log(err);
                    });
    }

    deleteNote(noteID){
        this.http.delete(this.urlDelete + '?noteID='+ noteID)
                    .subscribe(res => {
                        console.log(res);
                    },err => {
                        console.log(err);
                    });
    }

}