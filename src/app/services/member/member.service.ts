import { Injectable } from '@angular/core';
import { of } from 'rxjs/observable/of';
import { catchError } from 'rxjs/operators';
import { Members } from '../../models/members';
import { Observable } from 'rxjs/Observable';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';
import { InMemoryDataService } from '../database.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';


const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class MemberService {


  members: Members[];
  obs: Observable<Members[]>;

  private url = '/api/members';

  constructor(private http: HttpClient) { }



  getMembers (): Observable<Members[]> {
    return this.http.get<Members[]>(this.url)
      .pipe(
        catchError(this.handleError('getMembers', []))
      );

  }
  getMember (id): Observable<Members> {
    console.log(this.url + '/' +  id);
    return this.http.get<Members>(this.url + '/' +  id)
      .pipe(
        catchError(this.handleError('getMember name: ${name}', null))
      );
  }


  /** POST: add a new member to the server */
addMember (member: Members): Observable<Members> {
  return this.http.post<Members>(this.url, member, httpOptions).pipe(
    catchError(this.handleError<Members>('addMember'))
  );
}

deleteMember(id: number): Observable<Members> {
  return this.http.delete<Members>(this.url + '/' + id, httpOptions).pipe(catchError(this.handleError<Members>('delete Members')));
}
    /**
 * Handle Http operation that failed.
 * Let the app continue.
 * @param operation - name of the operation that failed
 * @param result - optional value to return as the observable result
 */
private handleError<T> (operation = 'operation', result?: T) {
  return (error: any): Observable<T> => {

    // TODO: send the error to remote logging infrastructure
    console.error(error); // log to console instead



    // Let the app keep running by returning an empty result.
    return of(result as T);
  };
}

}
