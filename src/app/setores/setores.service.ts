import { Setor } from './setor.model';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};

const apiUrl = 'http://localhost:8080/v1';

@Injectable({
  providedIn: 'root'
})
export class SetoresService {


  constructor(private http: HttpClient) { }

    getSetores() {
      return this.http.get<Setor[]>(`${apiUrl}/setores/todos`)
  }
}
