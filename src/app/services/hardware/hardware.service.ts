import { Injectable } from '@angular/core';
import { of } from 'rxjs/observable/of';
import { catchError } from 'rxjs/operators';
import { Hardware } from '../../models/hardware';
import { Observable } from 'rxjs/Observable';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';
import { InMemoryDataService  } from './../database.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';


const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class HardwareService {


  hardwares: Hardware[];
  obs: Observable<Hardware[]>;

  private url = '/api/hardware';

  constructor(private http: HttpClient) { }



  getHardwares (): Observable<Hardware[]> {
    return this.http.get<Hardware[]>(this.url)
      .pipe(
        catchError(this.handleError('getHardware', []))
      );

  }
  getHardware (id): Observable<Hardware> {
    return this.http.get<Hardware>(this.url + '/' +  id)
      .pipe(
        catchError(this.handleError('getHardware name: ${name}', null))
      );
  }


  /** POST: add a new hardware to the server */
addHardware (hardware: Hardware): Observable<Hardware> {
  return this.http.post<Hardware>(this.url, hardware, httpOptions).pipe(
    catchError(this.handleError<Hardware>('addHardware'))
  );
}

deleteHardware(id: number): Observable<Hardware> {
  return this.http.delete<Hardware>(this.url + '/' + id, httpOptions).pipe(catchError(this.handleError<Hardware>('delete Hardware')));
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
