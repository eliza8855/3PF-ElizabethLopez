import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { Student } from 'src/app/models/student.interface';
import { environment} from 'src/environments/environment'

@Injectable({
  providedIn: 'root'
})
export class ApiAlumnosService {

  private _refresh$ = new Subject<void>();
  private readonly api: string = environment.api;

  constructor(private http : HttpClient) {}

  get refresh$() {
    return this._refresh$
  }

  getStudentList(): Observable<Student[]> {
    return this.http.get<Student[]>( `${this.api}/alumnos`);
  }

  createNewStudent( data: any ) {
    return this.http.post<any>(this.api + '/alumnos', data)
    .pipe(
      tap(()=> {
        this._refresh$.next()
      })
    )
  }

  updateStudent( data: any, id: number) {
    return this.http.put<any>(this.api + '/alumnos'+id, data)
    .pipe(
      tap(()=> {
        this._refresh$.next()
      })
    )
  }

  deleteStudent(id: number) {
    return this.http.delete<any>(this.api + '/alumnos'+id)
    .pipe(
      tap(()=> {
        this._refresh$.next()
      })
    )
  }

}
