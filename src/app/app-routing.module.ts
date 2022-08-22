import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ListaAlumnosComponent } from "./lista-alumnos/lista-alumnos.component";
import { ListaClasesComponent } from "./lista-clases/lista-clases.component";
import { ListaCursosComponent } from "./lista-cursos/lista-cursos.component";
import { PaginaNoEncontradaComponent } from "./pagina-no-encontrada/pagina-no-encontrada.component";

const routes: Routes = [
    { path: 'alumnos', component: ListaAlumnosComponent},
    { path: 'cursos', component: ListaCursosComponent},
    { path: 'clases', component: ListaClasesComponent},

    { path: '', redirectTo: 'alumnos', pathMatch:'full'},
    { path: '**', component: PaginaNoEncontradaComponent}
]

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule {}