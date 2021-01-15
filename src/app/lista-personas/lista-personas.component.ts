import { Component, OnInit } from '@angular/core';
import { Persona } from '../Persona';

@Component({
  selector: 'app-lista-personas',
  templateUrl: './lista-personas.component.html',
  styleUrls: ['./lista-personas.component.css']
})
export class ListaPersonasComponent implements OnInit {
  
  public persona=new Persona();

  constructor() {
    this.persona.setNombre("Ezequiel");
    this.persona.setApellido("Rodriguez Esparza");
    this.persona.setEdad(32);
    this.persona.setSexo("Masculino");
   }

  ngOnInit(): void {
  }
  

}
