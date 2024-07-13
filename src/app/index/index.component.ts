import { Component, OnInit } from '@angular/core';
import { CategoriasService } from '../service/categorias.service';
import { Categoria } from '../interface/categoria';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrl: './index.component.css'

})
export class IndexComponent implements OnInit{
  categorias: Categoria[] = [];
  categoriaNombre: Categoria[] = [];
  zapatillasNuevas: Categoria[] = [];
  liquidaciones: Categoria[] = [];//propiedad

  currentPage: string = 'index';
  


  constructor(
    private categoriaService: CategoriasService
  ) { }
  ngOnInit(): void {
      this.listarCategoriasMasVendidas();
      this.listaCategoriaNuevas();
      this.listarLiquidaciones(); 
  }

  listarCategoriasMasVendidas(): void {
    this.categoriaService.getZapatillasMasVendidas().subscribe(
      (data: Categoria[]) => {
        this.categorias = data;
      },
      error => {
        console.error('Error al obtener las categorías:', error);
      }
    );
  }
  listaCategoriaNuevas(): void {
    this.categoriaService.getZapatillasNuevas().subscribe(
      (data: Categoria[]) => {
        this.zapatillasNuevas = data;
      },
      error => {
        console.error('Error al obtener las categorías:', error);
      }
    );
  }
  listarLiquidaciones(): void {
    this.categoriaService.getZapatillasLiquidaciones().subscribe(
      (data: Categoria[]) => {
        this.liquidaciones = data;
      },
      error => {
        console.error('Error al obtener las categorías:', error);
      }
    );
  }

  

}
