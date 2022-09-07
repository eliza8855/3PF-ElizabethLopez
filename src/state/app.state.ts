import { ActionReducerMap } from "@ngrx/store"
import { UsuarioState } from "src/models/usuario.state.model";
import { alumnoState} from "../models/alumnos.state"
import { alumnosReducer } from "./reducers/alumnos.reducers";
import { usuarioReducer } from "./reducers/usuario.reducer";

export interface AppState {
    alumnos: alumnoState;
    sesion: UsuarioState;
}

export const ROOT_REDUCERS: ActionReducerMap<AppState> = {
    alumnos: alumnosReducer,
    sesion: usuarioReducer,
}