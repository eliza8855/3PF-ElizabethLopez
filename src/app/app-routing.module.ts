import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { LoginComponent } from "./auth/components/login/login.component";
import { ListaAlumnosComponent } from "./core/components/lista-alumnos/lista-alumnos.component";
import { ListaClasesComponent } from "./core/components/lista-clases/lista-clases.component";
import { ListaCursosComponent } from "./core/components/lista-cursos/lista-cursos.component";
import { PaginaNoEncontradaComponent } from "./core/components/pagina-no-encontrada/pagina-no-encontrada.component";

const routes: Routes = [
    { path: 'alumnos', component: ListaAlumnosComponent},
    { path: 'cursos', component: ListaCursosComponent},
    { path: 'clases', component: ListaClasesComponent},
    { path: 'login', component: LoginComponent},

    { path: '', redirectTo: 'alumnos', pathMatch:'full'},
    { path: '**', component: PaginaNoEncontradaComponent}
]

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule {}