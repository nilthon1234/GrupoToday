// venta-boleta.service.ts
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Carrito } from '../interface/carrito';
import { Detalle } from '../interface/venta-boleta';

@Injectable({
  providedIn: 'root'
})
export class VentaBoletaService {

  private carrito = new BehaviorSubject<Detalle[]>([]);
  public carrito$ = this.carrito.asObservable();

  constructor() { }

  agregarAlCarrito(producto: Detalle) {
    const carritoActual = this.carrito.getValue();
    carritoActual.push(producto);
    this.carrito.next(carritoActual);
  }

  eliminarDelCarrito(id: number) {
    const carritoActual = this.carrito.getValue();
    const indice = carritoActual.findIndex(producto => producto.idZapatilla === id);
    if (indice !== -1) {
      carritoActual.splice(indice, 1);
      this.carrito.next(carritoActual);
    }
  }
}