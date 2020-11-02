import { Component, NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DocumentosComponent } from './components/documentos/documentos.component';
import { TodosLosUsuariosComponent } from './components/todosLosUsuarios/todos-los-usuarios.component';
import {UltimosUsuariosComponent} from './components/ultimosUsuarios/ultimos-usuarios.component';

const routes: Routes = [
  {path:'ultimos-usuarios',component:UltimosUsuariosComponent},
  {path:'todos-los-usuarios',component:TodosLosUsuariosComponent},
  {path:'documentos',component:DocumentosComponent},
  { path:'**',pathMatch:'full',redirectTo:'ultimos-usuarios' }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
