
import { createSelector } from "@ngrx/store"
import { AppState } from "../app.state"
import { alumnoState } from 'src/models/alumnos.state';

export const selectorAlumno = (state: AppState) => state.alumnos;

export const SelectorCargandoAlumnos = createSelector(
  selectorAlumno,
  (state: alumnoState) => state.cargando
);
