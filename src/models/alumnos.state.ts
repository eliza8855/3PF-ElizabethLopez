import { Student } from "src/app/models/student.interface";

export interface alumnoState {
    cargando: boolean;
    alumnos: Student[];
}