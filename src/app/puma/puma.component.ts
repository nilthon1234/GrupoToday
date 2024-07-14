import { Component, OnInit } from '@angular/core';
import { MarcasService } from '../service/marcas.service';
import { Categoria } from '../interface/categoria';

@Component({
  selector: 'app-puma',
  templateUrl: './puma.component.html',
  styleUrl: './puma.component.css'
})
export class PumaComponent implements OnInit {

  marcasPuma: Categoria[] = [];

  constructor( 
    private _pumaService: MarcasService
  ) { }
  ngOnInit(): void {
      this.listaPuma();
  }

  listaPuma(): void {
    this._pumaService.getMarcaPuma().subscribe(
      (data: Categoria[]) => {
        this.marcasPuma = data;
      },
      (error) => {
        console.error('Error al listar Puma', error);
      }
    );  //llamando al servicio para obtener los datos de la marca Puma.  //Se subscribe para escuchar el observable y manejar el resultado en caso de éxito o error.  //En caso de error, se imprime un mensaje de error en consola.  //La data que se obtiene es un arreglo de objetos Categoria.  //Se almacena en la propiedad marcasPuma.  //Si se quiere mostrar los datos en pantalla, se puede hacer de la siguiente manera: this.marcasPuma.forEach(marca => console.log(marca.nombre
  }
}
