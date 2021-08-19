import { Component,} from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
})
export class ListadoComponent{

  heroes: string[] = ['Heroe 1', 'Heroe 2', 'Heroe 3'];
  borrado : string = "";
  borrarHeroe(){
    this.borrado = this.heroes.shift() || "";
  }
}
