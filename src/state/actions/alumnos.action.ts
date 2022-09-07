import { createAction, props } from "@ngrx/store"
import { Student } from "src/app/models/student.interface";

export const cargarAlumnos = createAction(
 '[Lista Alumnos] Cargar alumnos'
);

export const alumnosCargados = createAction(
    '[Lista Alumnos] Cursos cargados',
    props<{ alumnos: Student[]}>()
);

