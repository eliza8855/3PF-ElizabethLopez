import { Component, OnInit } from '@angular/core';
import { Student } from 'src/commons/student.interface';
import { StudentList } from 'src/commons/StudentList.constant';

@Component({
  selector: 'app-lista-alumnos',
  templateUrl: './lista-alumnos.component.html',
  styleUrls: ['./lista-alumnos.component.css']
})
export class ListaAlumnosComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  students = StudentList; 

  promedyGrade(student: Student): number {
    const result = (student.Math + student.Literature + student.English) / 3; 
    return result;
  }

  getGender(student: Student): string {
   return  student.gender == 'M' ? 'Masculino': 'Femenino' 
  }
}
