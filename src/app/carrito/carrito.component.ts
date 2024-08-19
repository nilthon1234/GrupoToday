// carrito.component.ts
import { Component, OnInit } from '@angular/core';
import { VentaBoletaService } from '../service/venta-boleta.service';
import { Carrito } from '../interface/carrito';
import { FormControl, FormGroup } from '@angular/forms';
import { Detalle } from '../interface/venta-boleta';

@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.component.html',
  styleUrl: './carrito.component.css'
})
export class CarritoComponent implements OnInit{

  carrito: Detalle[] = [];
  cantidadForm: FormGroup;
  constructor(private ventaBoletaService: VentaBoletaService) {
    this.cantidadForm = new FormGroup({
      cantidad: new FormControl('')
    });
  }

  ngOnInit(): void {
    this.ventaBoletaService.carrito$.subscribe(carrito => {
      this.carrito = carrito;
    });
  }

  actualizarCantidad(index: number) {
    // actualiza la cantidad del producto en el carrito
    this.carrito[index].cantidad = this.carrito[index].cantidad;
  }
}