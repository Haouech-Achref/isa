import { Injectable } from '@angular/core';
import { of } from 'rxjs/observable/of';
import { catchError } from 'rxjs/operators';
import { Project } from '../../models/project';
import { Observable } from 'rxjs/Observable';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';
import { InMemoryDataService  } from './../database.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';


const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class ProjectService {


  projects: Project[];
  obs: Observable<Project[]>;

  private url = '/api/projects';

  constructor(private http: HttpClient) { }



  getProjects (): Observable<Project[]> {
    return this.http.get<Project[]>(this.url)
      .pipe(
        catchError(this.handleError('getProjects', []))
      );

  }
  getProject (id): Observable<Project> {
    return this.http.get<Project>(this.url + '/' +  id)
      .pipe(
        catchError(this.handleError('getProject name: ${name}', null))
      );
  }


  /** POST: add a new project to the server */
addProject (project: Project): Observable<Project> {
  return this.http.post<Project>(this.url, project, httpOptions).pipe(
    catchError(this.handleError<Project>('addProject'))
  );
}

deleteProject(id: number): Observable<Project> {
  return this.http.delete<Project>(this.url + '/' + id, httpOptions).pipe(catchError(this.handleError<Project>('delete Project')));
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
