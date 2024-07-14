import { Component, OnInit } from '@angular/core';
import { Categoria } from '../../interface/categoria';
import { MarcasService } from '../../service/marcas.service';
import { Marca } from '../../interface/marca';

@Component({
  selector: 'app-adidas',
  templateUrl: './adidas.component.html',
  styleUrl: './adidas.component.css',
})
export class AdidasComponent implements OnInit {
  
  adidas: Marca[] = [];

  constructor(private marcaService: MarcasService) {}

  ngOnInit(): void {
    this.listarAdidas();
  }
  listarAdidas(): void {
    this.marcaService.getMarcaAdidas().subscribe(
      (data: Marca[]) => {
        this.adidas = data;
      },
      (error) => {
        console.error('Error al listar marca ADIDAS', error);
      }
    );
  }
}
//