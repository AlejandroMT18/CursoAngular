import { Component } from "@angular/core";

@Component({

    selector: 'app-heroe',
    templateUrl: 'heroe.component.html'
})
export class HeroeComponent {

    nombre: string = 'Heroe1';
    edad  : number = 33;

    obtenerNombre(): string{
        return `${this.nombre} -  ${this.edad}`;
    }

    cambiarNombre():void{
        this.nombre = 'Heroe2';
    }

    cambiarEdad():void{
        this.edad = 18;
    }

}