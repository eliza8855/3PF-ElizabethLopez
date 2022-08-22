import { Component, OnInit } from '@angular/core';
import { ApiClasesService } from '../services/api-clases.service';

@Component({
  selector: 'app-lista-clases',
  templateUrl: './lista-clases.component.html',
  styleUrls: ['./lista-clases.component.css']
})
export class ListaClasesComponent implements OnInit {

  clases: any = [];

  constructor(
    private  clasesService: ApiClasesService
  ) { 

    this.clasesService.obtenerPromiseClases().then((clases) =>  {
      this.clases = clases;
    }).catch((error) => {
      console.log(error);
    })
  }

  ngOnInit(): void {
  }

}
