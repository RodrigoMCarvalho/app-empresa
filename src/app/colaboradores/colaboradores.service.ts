import { Colaborador } from './colaborador.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError, tap, map } from 'rxjs/operators';

const apiUrl = 'http://localhost:8080/v1';

@Injectable({
  providedIn: 'root'
})
export class ColaboradoresService {

  constructor(private http: HttpClient) { }

  getColaboradores() {
    return this.http.get<Colaborador[]>(`${apiUrl}/colaboradores/all`)
    .pipe(
      tap(_ => console.log(`leu os colaboradores`)),
        catchError(this.handleError<Colaborador[]>(`getColaboradores `)
        )
      );
  }

  getColaboradorById(id: number) {
    return this.http.get<Colaborador>(`${apiUrl}/colaborador/${id}`)
      .pipe(
        tap(_ => console.log(`leu o produto id=${id}`)),
          catchError(this.handleError<Colaborador>(`getColaboradorById id=${id}`)
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
