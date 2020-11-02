import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import {Router,RouterLinkActive} from '@angular/router';
import { NavegacionService } from 'src/app/services/navegacion.service';
import {AppComponent} from '../../app.component'


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  elem:string;
  @Output() corEnlaces=new EventEmitter<string>();
  constructor(navegacion:NavegacionService,appcomponent:AppComponent) { 

  }
  ngOnInit(): void {
  }
  coordinarEnlace(elemento:string):void {
    /* document.getElementById(elemento).classList.toggle("Active"); */
    console.log(elemento);
    this.elem=elemento;
    this.corEnlaces.emit(elemento);
  }
  
}
