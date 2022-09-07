import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthService } from './core/services/auth.service';
import { Sesion } from './models/sesion.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  sesion$!: Observable<Sesion>;
  
  title = '1PF-ElizabethLopez';

  constructor(
    private auth: AuthService
  ){}

  ngOnInit(): void {
    this.sesion$ = this.auth.obtenerSesion();
  }
}
