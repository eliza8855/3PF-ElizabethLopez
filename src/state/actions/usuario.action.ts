import { createAction, props } from '@ngrx/store';
import { Usuario } from 'src/app/models/usuario.interface';

export const crearSesion = createAction(
    '[Auth Login] Sesion iniciada',
     props<{ usuario: Usuario}>()
)