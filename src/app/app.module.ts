import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NavBarComponent } from './core/components/nav-bar/nav-bar.component';
import { ToolBarComponent } from './core/components/tool-bar/tool-bar.component';
import { ListaAlumnosComponent } from './core/components/lista-alumnos/lista-alumnos.component';
import { AbmAlumnosComponent } from './core/components/abm-alumnos/abm-alumnos.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule} from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDialogModule } from '@angular/material/dialog';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon'
import { NamePipe } from './pipes/names.pipe';
import { TitleColorDirective } from './directives/title-color.directive';
import { ListaCursosComponent } from './core/components/lista-cursos/lista-cursos.component';
import { PaginaNoEncontradaComponent } from './core/components/pagina-no-encontrada/pagina-no-encontrada.component';
import { AppRoutingModule } from './app-routing.module';
import { ListaClasesComponent } from './core/components/lista-clases/lista-clases.component';
import { MatCardModule } from '@angular/material/card';
import { AuthModule } from './auth/auth.module';
import { SharedModule } from './shared/shared.module';
import { AuthService } from './core/services/auth.service';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { ROOT_REDUCERS } from 'src/state/app.state'

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    ToolBarComponent,
    ListaAlumnosComponent,
    AbmAlumnosComponent,
    NamePipe,
    TitleColorDirective,
    ListaCursosComponent,
    PaginaNoEncontradaComponent,
    ListaClasesComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    NgbModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatDialogModule,
    MatTableModule,
    MatButtonModule,
    MatIconModule,
    AppRoutingModule,
    MatCardModule,
    SharedModule,
    AuthModule,
    StoreModule.forRoot(ROOT_REDUCERS),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production, name: "Prueba redux"})
  ],
  providers: [
    AuthService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
