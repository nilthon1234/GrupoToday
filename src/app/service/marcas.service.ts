import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Categoria } from '../interface/categoria';
import { Observable } from 'rxjs';
import { Marca } from '../interface/marca';

@Injectable({
  providedIn: 'root'
})
export class MarcasService {
  private baseUrl = 'http://localhost:8080/marca/buscar';

  constructor(private http: HttpClient) { }

  getMarcaAdidas(): Observable<Marca[]> {
    return this.http.get<Marca[]>(`${this.baseUrl}?nombre=adidas`)
  }

  getMarcaNike(): Observable<Marca[]> {
    return this.http.get<Marca[]>(`${this.baseUrl}?nombre=nike`)
  }
  getMarcaRebook(): Observable<Marca[]> {
    return this.http.get<Marca[]>(`${this.baseUrl}?nombre=reebok`)
  }
  getMarcaPuma(): Observable<Categoria[]> {
    return this.http.get<Categoria[]>(`${this.baseUrl}?nombre=puma`)
  }
}
