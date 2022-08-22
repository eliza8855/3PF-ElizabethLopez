import { Injectable } from "@angular/core";
import { Subject } from "rxjs";

@Injectable ({
    providedIn: 'root'
})

export class ApiClasesService {
 clases: any[] = [
    {orden: '1', detalle: 'Introduccion al curso y a Angular' , curso: 'Angular'},
    {orden: '2', detalle: 'Componentes y Elementos de un proyecto Angular' , curso: 'Angular'},
    {orden: '3', detalle: 'Clase complementaria de Instalación de Herramientas y Repaso de lo visto en clases' , curso: 'Angular'},
    {orden: '4', detalle: 'Typescript' , curso: 'Angular'},
    {orden: '5', detalle: 'Interpolación y Directivas' , curso: 'Angular'},
 ]

constructor(
) {


}

obtenerPromiseClases() {
    return new Promise ((resolve, reject) => {
        if (this.clases.length > 0) {
          resolve(this.clases);
        } else {
            reject({
                codigo: 0,
                mensaje: 'No hay clases en este arreglo'
            })
        }
    })
}

agregarNuevoClase(clase: any) {
    this.clases.push(clase);
 }

}