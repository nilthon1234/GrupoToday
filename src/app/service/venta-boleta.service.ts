// venta-boleta.service.ts
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Carrito } from '../interface/carrito';
import { DetalleDto, VentaBoleta } from '../interface/venta-boleta';
import { HttpClient } from '@angular/common/http';
import { Departamento } from '../interface/departamento';

@Injectable({
  providedIn: 'root'
})
export class VentaBoletaService {
  private ventaUrl = 'http://localhost:8080/venta/boleta'
  private depaUrl = 'http://localhost:8080/departamento/list-all'

  private carrito = new BehaviorSubject<DetalleDto[]>([]);
  public carrito$ = this.carrito.asObservable();

  constructor( private http: HttpClient) { }

  agregarAlCarrito(producto: DetalleDto) {
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

  registrarVenta(ventaBoleta: VentaBoleta): Observable<any>{
    return this.http.post<any>(this.ventaUrl,ventaBoleta)
  }

  listDepartamento(): Observable<Departamento[]> {
    return this.http.get<Departamento[]>(this.depaUrl)
  }


}

