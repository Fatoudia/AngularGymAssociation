import { Component, OnInit } from '@angular/core';
import { Gymnases } from './gymnases';
import { GymnaseService } from './services/gymnase.service';
import {HttpClient , HttpErrorResponse } from '@angular/common/http';
import { NgForm } from '@angular/forms';
import { Seances } from './seances';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
   public gymnases!: Gymnases[];
   public seances:Seances[];
   public editGymnase!: Gymnases;
   public deleteGymnases!: Gymnases;
   public findById:Gymnases;
   title: 'Any';
   

   constructor(private gymnaseService:GymnaseService){ }

   ngOnInit(){
     this.getGymnases();
   }

   public getGymnases(): void {
    this.gymnaseService.getGymnases().subscribe(
      (response: Gymnases[]) => {
        this.gymnases = response;
        console.log(this.gymnases);
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

 // public getSeances(): void {
 //   this.gymnaseService.
 // }

  public onAddGymnases(addForm: NgForm): void {
   
    document.getElementById('add-employee-form').click();
    this.gymnaseService.addGymnases(addForm.value).subscribe(
      (response: Gymnases) => {
        console.log(response);
        this.getGymnases();
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
        addForm.reset();
      }
    );
   }
  
  public  addSeance(addSeance: NgForm ) {
    document.getElementById('add-seance-form').click();
    this.gymnaseService.addSeances(addSeance.value).subscribe(
       (reponse: Seances) =>{
         console.log(reponse);
         this.getGymnases();
       },
       (error: HttpErrorResponse) => {
        alert(error.message);
        addSeance.reset();
      }
    );

 //   const number = this.seances.length;
    
 //   this.seances.push();
  }

  public onUpdateGymnases(gymnase: Gymnases): void {
    this.gymnaseService.updateGymnases(gymnase).subscribe(
      (response: Gymnases) => {
        console.log(response);
        this.getGymnases();
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      },
    
    );
  }

  public onDeleteGymnases(gymnaseId: string): void {
    this.gymnaseService.deleteGymnases(gymnaseId).subscribe(
      (response: void) => {
        console.log(response);
        this.getGymnases();
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

  public searchGymnases(key: string): void {
    console.log(key);
    const results: Gymnases[] = [];
    for (const gymnase of this.gymnases) {
      if (gymnase.id.toLowerCase().indexOf(key.toLowerCase()) !== -1
      || gymnase.nomGymnase.toLowerCase().indexOf(key.toLowerCase()) !== -1
      || gymnase.adresse.toLowerCase().indexOf(key.toLowerCase()) !== -1
      || gymnase.ville.toLocaleLowerCase().indexOf(key.toLocaleLowerCase()) !== -1)
       {
        results.push(gymnase);
      }
    }
    this.gymnases = results;
    if (results.length === 0 || !key) {
      this.getGymnases();
    }
  }

  public onOpenModal(gymnase: Gymnases, mode: string): void {
    const container = document.getElementById('main-container');
    const button = document.createElement('button');
    button.type = 'button';
    button.style.display = 'none';
    button.setAttribute('data-toggle', 'modal');
    if (mode === 'add') {
      button.setAttribute('data-target', '#addGymnaseModal');
    }
    if (mode === 'edit') {
      this.editGymnase = gymnase;
      button.setAttribute('data-target', '#updateGymnaseModal');
    }
    if (mode === 'delete') {
      this.deleteGymnases = gymnase;
      button.setAttribute('data-target', '#deleteGymnaseModal');
    }if(mode === 'show'){
      this.findById = gymnase;
      button.setAttribute('data-target', '#showGymnaseModal');
    }if(mode === 'addSence'){
      this.findById = gymnase;
      button.setAttribute('data-target', '#addSeanceModal');
    }
    container!.appendChild(button);
    button.click();
  }


}
