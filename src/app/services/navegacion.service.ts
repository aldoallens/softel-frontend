import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NavegacionService {
  ultimosUsuarios:boolean=true;
  todosLosUsuarios:boolean;
  documentos:boolean;
  contactos:boolean;
  constructor( ) { }

  /* function setUltimosUsuarios(estado:boolean):void {
    
  } */

}
