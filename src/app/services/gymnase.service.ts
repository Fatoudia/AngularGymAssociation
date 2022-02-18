import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Gymnases } from '../gymnases';
import { Seances } from "../seances";
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class GymnaseService {

  private apiServerUrl  = environment.apiBaseUrl;
  title = 'Demo';
  greeting = {};
  constructor(private http:HttpClient) { 
    http.get('resource').subscribe(data => this.greeting = data);
  }


  public getGymnases():Observable<Gymnases[]>{
    return this.http.get<Gymnases[]>(`${this.apiServerUrl }/gymnas`);

  }

  public addGymnases(gymnase: Gymnases): Observable<Gymnases> {
    return this.http.post<Gymnases>(`${this.apiServerUrl }/gymnas/add`, gymnase);
  }

  public addSeances(seance: Seances): Observable<Seances>{
   return this.http.post<Seances>(`${this.apiServerUrl}`, seance)
  }

  public updateGymnases(gymnase: Gymnases): Observable<Gymnases> {
    return this.http.put<Gymnases>(`${this.apiServerUrl }/gymnas/update`, gymnase);
  }

  public deleteGymnases(gymnaseId: string): Observable<void> {
    return this.http.delete<void>(`${this.apiServerUrl}/gymnas/delete/${gymnaseId}`);
  }

  public findById(gymnaseId: string):Observable<Gymnases> {
    return this.http.get<Gymnases>(`${this.apiServerUrl}/?gymnaseId=${gymnaseId}`);
 }

 
}

 
