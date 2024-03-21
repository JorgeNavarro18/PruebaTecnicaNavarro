import { Component, ElementRef, ViewChild } from '@angular/core';
import { GifsService } from '../services/gifs.service';

@Component({
  selector: 'app-buscar',
  templateUrl: './buscar.component.html',
  styles: [
  ]
})
export class BuscarComponent {
  @ViewChild('busqueda') busqueda!: ElementRef<HTMLInputElement>
  constructor(private gifsService: GifsService){

  }

  buscar(){
    //console.log(this.buscando);
    const valor: string = this.busqueda.nativeElement.value.trim().toLocaleLowerCase();
    this.gifsService.buscarGifs(valor);
    if(valor.length === 0){
      return;
    }
    this.busqueda.nativeElement.value= '';

  }

}
