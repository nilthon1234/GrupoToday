// adidas.component.ts
import { Component, OnInit } from '@angular/core';
import { Marca } from '../../interface/marca';
import { MarcasService } from '../../service/marcas.service';
import { VentaBoletaService } from '../../service/venta-boleta.service';
import { Carrito } from '../../interface/carrito';
import { ToastrService } from 'ngx-toastr';
import { Detalle } from '../../interface/venta-boleta';

@Component({
  selector: 'app-adidas',
  templateUrl: './adidas.component.html',
  styleUrl: './adidas.component.css',
})
export class AdidasComponent implements OnInit {
  
  adidas: Marca[] = [];

  constructor(private marcaService: MarcasService,
              private ventaBoletaService: VentaBoletaService,
              private toastr: ToastrService) {}

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

  agregarAlCarrito(producto: Marca, cantidad: HTMLInputElement) {
    const carrito: Detalle = {
      idZapatilla: producto.idZapatilla!,
      marca: producto.marcaZapatilla!,
      nombreZapatilla: producto.nombreZapatilla!,
      precioZapatilla: producto.precioZapatilla!,
      img: producto.urlImg,
      cantidad: parseInt(cantidad.value, 10)
    };
    this.ventaBoletaService.agregarAlCarrito(carrito);
    this.toastr.success('Zapatilla agregada al carrito')
  }
}