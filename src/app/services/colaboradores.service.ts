import { Colaborador } from './../models/colaborador.model';
import { ColaboradorPage } from '../models/colaboradorPage.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError, tap, map } from 'rxjs/operators';
import { environment } from '../environment/environments';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
}; 

@Injectable({
  providedIn: 'root'
})
export class ColaboradoresService {

  apiUrl: string;

  constructor(private http: HttpClient) {
    this.apiUrl = environment.apiUrl;
   }

  getColaboradores() {
    return this.http.get<Colaborador[]>(`${this.apiUrl}/colaboradores/all`)
    .pipe(
      tap(_ => console.log(`leu os colaboradores`)),
        catchError(this.handleError<Colaborador[]>(`getColaboradores `)
        )
      );
  }
  
  getColaboradoresPage(page: number): Observable<ColaboradorPage>{
    return this.http.get<ColaboradorPage>(`${this.apiUrl}/colaboradores?page=${page}&size=8`)
    .pipe(
      map(response => {
        const data = response;
        console.log(data.content);
        return data ;
      }));
  }

  getColaboradorById(id: number) {
    return this.http.get<Colaborador>(`${this.apiUrl}/colaborador/${id}`)
      .pipe(
        tap(_ => console.log(`leu o colaborador id=${id}`)),
          catchError(this.handleError<Colaborador>(`getColaboradorById id=${id}`)
        )
      );
  }

  addColaborador(colaborador) {
    return this.http.post<Colaborador>(`${this.apiUrl}/colaborador`, colaborador, httpOptions)
      .pipe(
        tap((colaborador: Colaborador) => console.log(`adicionou o colaborador com w/ id=${colaborador.id}`)),
          catchError(this.handleError<Colaborador>('addColaborador')
        )
      );
  }

  updateColaborador(colaborador) {
    return this.http.put<Colaborador>(`${this.apiUrl}/colaborador`, colaborador, httpOptions)
      .pipe(
        tap((colaborador: Colaborador) => console.log(`atualizou o colaborador com w/ id=${colaborador.id}`)),
          catchError(this.handleError<Colaborador>('updateColaborador')
        )
      );
  }

  delete(id) {
    return this.http.delete<Colaborador>(`${this.apiUrl}/colaborador/${id}`)
      .pipe(
        tap(_ => console.log('Colaborador removido com sucesso')),
          catchError(this.handleError<Colaborador>('delete')
        )
      );
  }
  
  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      console.error(error);

      return of(result as T);
    };
  }
}
