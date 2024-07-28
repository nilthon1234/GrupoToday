import { Component, OnInit } from '@angular/core';
import { CategoriasService } from '../service/categorias.service';
import { Categoria } from '../interface/categoria';
import { privateDecrypt } from 'crypto';
import { MarcasService } from '../service/marcas.service';
import { Marca } from '../interface/marca';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrl: './index.component.css'
  

})
export class IndexComponent implements OnInit{
  categorias: Categoria[] = [];
  zapatillasNuevas: Categoria[] = [];
  liquidaciones: Categoria[] = [];//propiedad
  adidas: Marca[] = [];

  


  constructor(
    private categoriaService: CategoriasService,
    private adidasService: MarcasService  //agregar el servicio adidasService en el constructor para usarlo en el método listarAdidas()  //adidasService: AdidasService,  //agregar esta línea en el constructor para usarlo en el método listarAdidas()  //private adidasService: AdidasService,  //agregar esta línea en el constructor para usarlo en el método listarAdidas()  //private adidasService
    
  ) { }
  ngOnInit(): void {
      this.listarCategoriasMasVendidas();
      this.listaCategoriaNuevas();
      this.listarLiquidaciones(); 
      this.listarAdidas();  //agregar este método para listar las zapatillas de Adidas
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
  listarAdidas(): void {
    this.adidasService.getMarcaAdidas().subscribe(
      (data: Marca[]) => {
        this.adidas = data;
      },
      error => {
        console.error('Error al obtener las zapatillas de Adidas:', error);
      }
    );
  }
  

}
