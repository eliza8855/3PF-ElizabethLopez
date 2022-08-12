import { Component, OnInit } from '@angular/core';
import { Student } from 'src/commons/student.interface';
import { StudentList } from 'src/commons/StudentList.constant';
import { ApiAlumnosService } from '../services/api-alumnos.service';
import {MatDialog} from '@angular/material/dialog'
import { MatTableDataSource } from '@angular/material/table';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AbmAlumnosComponent } from '../abm-alumnos/abm-alumnos.component';

@Component({
  selector: 'app-lista-alumnos',
  templateUrl: './lista-alumnos.component.html',
  styleUrls: ['./lista-alumnos.component.css']
})
export class ListaAlumnosComponent implements OnInit {

  displayedColumns : string[] = ['id', 'nombre', 'telefono', 'correo', 'examenParcial', 'examenFinal', 'proyecto', 'action'];
  constructor( 
    private dialog: MatDialog,
    private api: ApiAlumnosService,
    private modalService: NgbModal,
     ) { }

  students: any;

  ngOnInit(): void {
    this.api.refresh$
    .subscribe(()=>{
      this.getStudentList();
    })

    this.getStudentList()
  }

  getStudentList() {
    this.api.getStudentList().subscribe( {
     next: (res) => {
       this.students =  new MatTableDataSource(res);
     },
     error: (err) => {
       alert ("Hubo un error")
     }
    }
    )
  }

  // editStudent(row: any) {
  //   const nombres = row.nombres;
  //   this.modalService.open(AbmAlumnosComponent , {
  //     size: 'lg',
  //     centered: true 
  //     {
  //       nombres
  //     }
      

  //     // apellidos = new FormControl();
  //     // documentoIdentidadOptions = new FormControl();
  //     // documentoIdentidad = new FormControl();
  //     // direccion = new FormControl();
  //     // telefono = new FormControl();
  //     // tipoTelefono = new FormControl();
  //     // correo = new FormControl();
  //     // examenParcial = new FormControl();
  //     // examenFinal = new FormControl();
  //     // proyecto = new FormControl();
  //   } );
  // }

  deleteStudent(row: any) {
    this.api.deleteStudent(row.id)
    .subscribe( res => {
      alert("Estudiante eliminado")
    })
  }

}
