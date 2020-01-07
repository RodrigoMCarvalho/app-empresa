import { Colaborador } from './colaborador.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

const apiUrl = 'http://localhost:8080/v1';

@Injectable({
  providedIn: 'root'
})
export class ColaboradoresService {

  constructor(private http: HttpClient) { }

  getColaboradores() {
    return this.http.get<Colaborador[]>(`${apiUrl}/colaboradores/all`);
  }
}
