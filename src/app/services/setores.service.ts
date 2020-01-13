import { Setor } from '../models/setor.model';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, tap, map } from 'rxjs/operators';
import { environment } from '../environment/environments';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json; charset=utf-8'})
};

@Injectable({
  providedIn: 'root'
})
export class SetoresService {

  apiUrl: string;

  constructor(private http: HttpClient) {
    this.apiUrl = environment.apiUrl;
   }

  getSetores() {
    return this.http.get<Setor[]>(`${this.apiUrl}/setores/todos`)
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
