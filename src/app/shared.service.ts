import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SharedService {
  readonly APIurl = 'http://localhost:3000/';
  constructor(private http: HttpClient) {}
  getSujetsList(): Observable<any[]> {
    return this.http.get<any>(this.APIurl + '/sujets');
  }
  addSujets(value: any) {
    return this.http.post(this.APIurl + '/sujets', value);
  }
  updateSujets(value: any) {
    return this.http.put(this.APIurl + '/sujets', value);
  }
  deleteSujets(value: any) {
    return this.http.delete(this.APIurl + '/sujets' + value);
  }

  getEncadrantsList(): Observable<any[]> {
    return this.http.get<any>(this.APIurl + '/encadrants');
  }
  addEncadrants(value: any) {
    return this.http.post(this.APIurl + '/encadrants', value);
  }
  updateEncadrants(value: any) {
    return this.http.put(this.APIurl + '/encadrants', value);
  }
  deleteEncadrants(value: any) {
    return this.http.delete(this.APIurl + '/encadrants' + value);
  }
  getStagiairesList(): Observable<any[]> {
    return this.http.get<any>(this.APIurl + '/stagiaires');
  }
  addStagiaires(value: any) {
    return this.http.post(this.APIurl + '/stagiaires', value);
  }
  updateStagiaires(value: any) {
    return this.http.put(this.APIurl + '/stagiaires', value);
  }
  deleteStagiaires(value: any) {
    return this.http.delete(this.APIurl + '/stagiaires' + value);
  }
  getStagesList(): Observable<any[]> {
    return this.http.get<any>(this.APIurl + '/stages');
  }
  addStages(value: any) {
    return this.http.post(this.APIurl + '/stages', value);
  }
  updateStages(value: any) {
    return this.http.put(this.APIurl + '/stages', value);
  }
  deleteStages(value: any) {
    return this.http.delete(this.APIurl + '/stages' + value);
  }

  getAllSujetssNames(): Observable<any[]> {
    return this.http.get<any[]>(this.APIurl + '/sujets/getAllSujetsNames');
  }
}
