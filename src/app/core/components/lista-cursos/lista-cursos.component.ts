import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { ApiCursosService } from '../../services/api-cursos.service';

@Component({
  selector: 'app-lista-cursos',
  templateUrl: './lista-cursos.component.html',
  styleUrls: ['./lista-cursos.component.css']
})
export class ListaCursosComponent implements OnInit, OnDestroy {

  cursos: any = [];
  cursosSuscripcion: Subscription;
  cursos$: Observable<any>

  constructor(
    private cursosService: ApiCursosService
  ) {

    this.cursosSuscripcion = this.cursosService.obtenerObservableCursos().subscribe( (cursos) => {
      this.cursos = cursos;
    })

    this.cursos$ = this.cursosService.obtenerObservableCursos()

   }

  ngOnInit(): void {
  }

  ngOnDestroy(): void {
    this.cursosSuscripcion.unsubscribe();
  }

  agregarNuevoCurso() {
    let curso = {
      nombre: 'Ruby',
      profesor: 'Carlos Juarez',
      duracion: '4 meses'
    };
    this.cursosService.agregarNuevoCurso(curso);
  }

}
