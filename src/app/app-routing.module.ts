import { Component, NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {UltimosUsuariosComponent} from './components/ultimosUsuarios/ultimos-usuarios.component';




const routes: Routes = [
  {path:'ultimos-usuarios',component:UltimosUsuariosComponent},
  { path:'**',pathMatch:'full',redirectTo:'ultimos-usuarios' }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
