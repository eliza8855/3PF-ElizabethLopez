import { Usuario } from "../app/models/usuario.interface";

export interface UsuarioState {
    sesionActiva: boolean;
    usuario: Usuario
}