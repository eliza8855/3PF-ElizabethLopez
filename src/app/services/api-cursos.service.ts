import { Injectable } from "@angular/core";
import { of, Subject } from "rxjs";

@Injectable ({
    providedIn: 'root'
})

export class ApiCursosService {
    cursos: any[] = [
        { nombre: 'Angular', profesor: 'Juan Perez', duracion: '6 meses'},
        { nombre: 'React', profesor: 'Armando Chavez', duracion: '5 meses'},
        { nombre: 'UX/UI', profesor: 'Carmen Escovedo', duracion: '5 meses'},
    ];
    cursosSubject: Subject<any>;

constructor(
) {
    this.cursosSubject = new Subject();
}

 obtenerObservableCursos() {
    return of(this.cursos)
 }

 agregarNuevoCurso(curso: any) {
    this.cursos.push(curso);
    this.cursosSubject.next(this.cursos);
 }

}