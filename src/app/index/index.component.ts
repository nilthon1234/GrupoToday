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
  categoriaNombre: string = 'mas vendida';

  constructor(
    private categoriaService: CategoriasService
  ) { }
  ngOnInit(): void {
      this.listarCategorias();
  }

  listarCategorias(): void {
    this.categoriaService.getCategoriasPorNombre(this.categoriaNombre).subscribe(
      (data: Categoria[]) => {
        this.categorias = data;
      },
      error => {
        console.error('Error al obtener las categorías:', error);
      }
    );
  }

}
