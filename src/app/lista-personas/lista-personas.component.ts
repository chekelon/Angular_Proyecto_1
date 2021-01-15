import { Component, OnInit } from '@angular/core';
import { Persona } from '../Persona';

@Component({
  selector: 'app-lista-personas',
  templateUrl: './lista-personas.component.html',
  styleUrls: ['./lista-personas.component.css']
})
export class ListaPersonasComponent implements OnInit {
  persona: Persona = {
    id: 1,
    nombre: 'Ezequiel',
    apellidos:'Rodriguez Esparza',
    edad:32,
    sexo:'Masculino'
  };
  constructor() { }

  ngOnInit(): void {
  }
  

}
