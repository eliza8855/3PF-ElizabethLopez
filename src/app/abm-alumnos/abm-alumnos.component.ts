import { ThisReceiver } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Subscription } from 'rxjs';
import { ApiAlumnosService } from '../services/api-alumnos.service';

@Component({
  selector: 'app-abm-alumnos',
  templateUrl: './abm-alumnos.component.html',
  styleUrls: ['./abm-alumnos.component.css']
})
export class AbmAlumnosComponent implements OnInit {

  nombres = new FormControl();
  apellidos = new FormControl();
  documentoIdentidadOptions = new FormControl();
  documentoIdentidad = new FormControl();
  direccion = new FormControl();
  telefono = new FormControl();
  tipoTelefono = new FormControl();
  correo = new FormControl();
  examenParcial = new FormControl();
  examenFinal = new FormControl();
  proyecto = new FormControl();

  nuevoAlumno = [];

 Form: FormGroup = new FormGroup ({
   nombres: this.nombres,
   apellidos: this.apellidos,
   documentoIdentidadOptions: this.documentoIdentidadOptions,
   documentoIdentidad: this.documentoIdentidad,
   direccion: this.direccion,
   telefono: this.telefono,
   tipoTelefono: this.tipoTelefono,
   correo: this.correo, 
   examenParcial: this.examenParcial,
   examenFinal: this.examenFinal,
   proyecto: this.proyecto, 

 })


  constructor(
    public activeModal: NgbActiveModal ,
    private api : ApiAlumnosService
   ) { 
    this.addFormValidators();
  }
 
  ngOnInit(): void {

  }
  
  private addFormValidators(): void {
    this.nombres.setValidators([
      Validators.required
    ]);
    this.apellidos.setValidators([
      Validators.required
    ]);
    this.documentoIdentidadOptions.setValidators([
      Validators.required
    ]);
    this.documentoIdentidad.setValidators([
      Validators.required,
      Validators.maxLength(10)
    ]);
    this.direccion.setValidators([
      Validators.required
    ]);
    this.telefono.setValidators([
      Validators.required,
      Validators.maxLength(10)
    ]);
    this.tipoTelefono.setValidators([
      Validators.required,
    ]);
    this.correo.setValidators([
      Validators.required,
      Validators.email
    ]);
    this.examenParcial.setValidators([
      Validators.min(0),
      Validators.max(20)
    ]);
    this.examenFinal.setValidators([
      Validators.min(0),
      Validators.max(20)
    ]);
    this.proyecto.setValidators([
      Validators.min(0),
      Validators.max(20)
    ]);
  }

  closeModal() {
    this.activeModal.dismiss();
  }

  saveModal() {
   this.nuevoAlumno = this.Form.value
    this.api.createNewStudent(this.nuevoAlumno).subscribe({
      next: (res) => {
        alert("nuevo Alumno agregado")
        this.Form.reset();
      },
      error: () => {
        alert("se ha producido un error")
      }
    })
   console.log(this.Form.value)
   this.activeModal.dismiss();
  }

}
