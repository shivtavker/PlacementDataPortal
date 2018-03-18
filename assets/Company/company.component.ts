import { Component, ViewChild } from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
    selector: 'company-component',
    templateUrl: './company.html',
    styleUrls: ['../../public/stylesheets/company.component.css']
})

export class CompanyComponent {

@ViewChild('noteTitle2')noteTitle2TextBox;
@ViewChild('noteBody2')noteBody2TextBox;

company = {
    name: '',
    ID: 0
}

wantToEditNote = false;
wantToAddNote = false;
noteToEdit = -1;
columnToAddNote = 0;

notes = [
    {
        ID: 12,
        columnID: 1,
        title: 'Simple-Note',
        body:`<ul>
                <li>Shiv tavker</li>
                <li>Shiv Tavker</li>
              </ul>`
    },
    {
        ID: 13,
        columnID: 2,
        title: 'Simple-Note',
        body:`<ul>
                <li>Shiv tavker</li>
                <li>Shiv Tavker</li>
              </ul>`
    },
    {
        ID: 14,
        columnID: 1,
        title: 'Simple-Note',
        body:`<ul>
                <li>Shiv tavker</li>
                <li>Shiv Tavker</li>
              </ul>`
    },
    {
        ID: 15,
        columnID: 3,
        title: 'Simple-Note',
        body:`<ul>
                <li>Shiv tavker</li>
                <li>Shiv Tavker</li>
              </ul>`
    },
]

    constructor(private activatedRoute: ActivatedRoute){
        this.activatedRoute.params.subscribe(params => {
            this.company.ID = +params['id'];
            this.company.name = params['name']
        })
    }

    deleteNote(index){
        this.notes.splice(index, 1);
        console.log(this.notes);
    }

    editNoteBox(i){
        this.wantToEditNote =! this.wantToEditNote;
        this.noteToEdit = i;
        document.getElementById('note-title').value = this.notes[i].title;
        document.getElementById('note-body').value = this.notes[i].body;
    }

    editNote(){
        this.notes[this.noteToEdit].title = document.getElementById('note-title').value;
        this.notes[this.noteToEdit].body = document.getElementById('note-body').value;
        this.wantToEditNote =! this.wantToEditNote;
    }

    addNoteBox(i){
        this.wantToAddNote =! this.wantToAddNote;
        this.columnToAddNote = i;
    }

    addNote(){
        let note = {
            ID: this.notes[this.notes.length -1].ID + 1,
            columnID: this.columnToAddNote,
            title: this.noteTitle2TextBox.nativeElement.value,
            body: this.noteBody2TextBox.nativeElement.value
        }
        this.notes.push(note);
        console.log(note);
        this.wantToAddNote =! this.wantToAddNote;
        this.noteTitle2TextBox.nativeElement.value = '';
        this.noteBody2TextBox.nativeElement.value = '';
    }

}