import { Component, OnInit } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interface';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})


export class MainPageComponent{

  personajes: Personaje[] = [
    {
      nombre: 'Goku',
      poder: 9000
    },
    {
      nombre: 'Vegeta',
      poder: 9000
    }
  ];

  nuevo: Personaje = {
    nombre: '',
    poder: 0
  };

  cambiarNombre( event:any ){
    console.log(event.target.value);
  };

  agregarNuevoPersonaje ( argumento:Personaje ){
    this.personajes.push( argumento );
  }

}
