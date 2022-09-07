import { alumnoState } from "src/models/alumnos.state";
import { createReducer, on } from "@ngrx/store";
import { cargarAlumnos, alumnosCargados } from "../actions/alumnos.action"

const estadoInicial: alumnoState = {
    cargando: false, 
    alumnos: []
}

export const alumnosReducer = createReducer(
    estadoInicial,
    on(cargarAlumnos, (estado) => {
        return {...estado, cargando: true}
    }),
    on(alumnosCargados, (estado, {alumnos}) => {
        return {...estado, cargando: false, alumnos: alumnos}
    })

)