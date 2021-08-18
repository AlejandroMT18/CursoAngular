import { Component } from '@angular/core';

@Component({
    selector: 'app-contador',
    template: `
        <h1> {{ title }} </h1>



        <button (click)="acumular( base )">+ {{ base }}</button>

        <button (click)="acumular( -base )">- {{ base }}</button>

        <span> La base es: <strong>{{ numero }}</strong> </span>
    `
})
export class ContadorComponent {
    
    title: string = 'bases';
    numero: number = 5;
    base: number = 10;
    acumular(valor:number){
        this.numero += valor;
    }

}