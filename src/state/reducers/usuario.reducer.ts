import { UsuarioState } from "src/models/usuario.state.model";
import { createReducer, on } from '@ngrx/store';
import { crearSesion } from 'src/state/actions/usuario.action'

export const estadoInicial: UsuarioState = {
    sesionActiva: false,
    usuario: {
        id: '',
        usuario: '',
        contrasena: '',
        admin: false
    }
}

export const usuarioReducer = createReducer(
    estadoInicial,
    on(crearSesion, (estado, {usuario}) => {
        return {...estado, sesionActiva: true, usuario}
    })
)