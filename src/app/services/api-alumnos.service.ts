import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ApiAlumnosService {

  private _refresh$ = new Subject<void>();

  constructor(private http : HttpClient) {}

  get refresh$() {
    return this._refresh$
  }

  getStudentList() {
    return this.http.get<any>("http://localhost:3000/studentList/");
  }

  createNewStudent( data: any ) {
    return this.http.post<any>("http://localhost:3000/studentList/", data)
    .pipe(
      tap(()=> {
        this._refresh$.next()
      })
    )
  }

  updateStudent( data: any, id: number) {
    return this.http.put<any>("http://localhost:3000/studentList/"+id, data)
    .pipe(
      tap(()=> {
        this._refresh$.next()
      })
    )
  }

  deleteStudent(id: number) {
    return this.http.delete<any>("http://localhost:3000/studentList/"+id)
    .pipe(
      tap(()=> {
        this._refresh$.next()
      })
    )
  }

}
