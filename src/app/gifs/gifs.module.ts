import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageMainComponent } from './page-main/page-main.component';
import { BuscarComponent } from './buscar/buscar.component';
import { FormsModule } from '@angular/forms';
import { CardGifsComponent } from './card-gifs/card-gifs.component';



@NgModule({
  declarations: [
    PageMainComponent,
    BuscarComponent,
    CardGifsComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports:[
    PageMainComponent
  ],
})
export class GifsModule { }
