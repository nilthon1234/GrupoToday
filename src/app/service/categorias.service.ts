import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Categoria } from '../interface/categoria';

@Injectable({
  providedIn: 'root',
})
export class CategoriasService {
  private baseURL = 'http://localhost:8080/categoria/buscar';
  constructor(private http: HttpClient) {}

  
  getZapatillasNuevas(): Observable<Categoria[]> {
    return this.http.get<Categoria[]>(`${this.baseURL}?categoriaNombre=nuevo`)
  }
  getZapatillasMasVendidas(): Observable<Categoria[]> {
    return this.http.get<Categoria[]>(`${this.baseURL}?categoriaNombre=mas vendida`
    );
  }
  getZapatillasLiquidaciones(): Observable<Categoria[]>{
    return this.http.get<Categoria[]>(`${this.baseURL}?categoriaNombre=liquidacion`);
  } 
}
