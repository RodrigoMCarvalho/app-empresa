import { ColaboradorPage } from '../models/colaboradorPage.model';
import { Colaborador } from '../models/colaborador.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError, tap, map } from 'rxjs/operators';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};

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
  
  getColaboradoresPage(page: number): Observable<ColaboradorPage>{
    return this.http.get<ColaboradorPage>(`${apiUrl}/colaboradores?page=${page}&size=8`)
    .pipe(
      map(response => {
        const data = response;
        console.log(data.content);
        return data ;
      }));
  }

  getColaboradorById(id: number) {
    return this.http.get<Colaborador>(`${apiUrl}/colaborador/${id}`)
      .pipe(
        tap(_ => console.log(`leu o produto id=${id}`)),
          catchError(this.handleError<Colaborador>(`getColaboradorById id=${id}`)
          )
        );
  }

  addColaborador(colaborador) {
    return this.http.post<Colaborador>(`${apiUrl}/colaborador`, colaborador, httpOptions)
      .pipe(
        tap((colaborador: Colaborador) => console.log(`adicionou o colaborador com w/ id=${colaborador.id}`)),
          catchError(this.handleError<Colaborador>('addColaborador')
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
