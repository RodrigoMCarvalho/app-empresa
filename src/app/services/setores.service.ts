import { Setor } from '../models/setor.model';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, tap, map } from 'rxjs/operators';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json; charset=utf-8'})
};

const apiUrl = 'http://localhost:8080/v1';

@Injectable({
  providedIn: 'root'
})
export class SetoresService {


  constructor(private http: HttpClient) { }

  getSetores() {
    return this.http.get<Setor[]>(`${apiUrl}/setores/todos`)
    .pipe(
      tap(_ => console.log(`leu os setores`)),
        catchError(this.handleError<Setor[]>(`getSetores`)
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
