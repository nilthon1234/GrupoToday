import { Component, OnInit } from '@angular/core';
import { MarcasService } from '../../service/marcas.service';
import { Marca } from '../../interface/marca';
import { ToastrService } from 'ngx-toastr';
import { VentaBoletaService } from '../../service/venta-boleta.service';
import { Carrito } from '../../interface/carrito';
import { Detalle } from '../../interface/venta-boleta';

@Component({
  selector: 'app-nike',
  templateUrl: './nike.component.html',
  styleUrl: './nike.component.css'
})
export class NikeComponent implements OnInit{

  marcasNike: Marca[] = [];

  constructor(
    private marcaService: MarcasService,
    private ventaBoletaService: VentaBoletaService,
    private toastr:  ToastrService,
  ){}
  ngOnInit(): void {
      
    this.listarNike();
  }

  listarNike(): void {
    this.marcaService.getMarcaNike().subscribe(
      (data : Marca[]) => {
        this.marcasNike = data;
      },
      error => {
        console.error('Error al obtener las marcas de Nike', error);
      }
    )
  }

  agregarCarrito(m: Marca, cantidad: HTMLInputElement){
    const carrito: Detalle = {
      idZapatilla: m.idZapatilla!,
      marca: m.marcaZapatilla,
      nombreZapatilla: m.nombreZapatilla!,
      precioZapatilla: m.precioZapatilla!,
      img: m.urlImg!,
      cantidad: parseInt(cantidad.value, 10)
    };
    this.ventaBoletaService.agregarAlCarrito(carrito);
    this.toastr.success('zapatilla agregada al carrito')
  }

}
