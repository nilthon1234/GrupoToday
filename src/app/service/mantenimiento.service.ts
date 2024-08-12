import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Categoria } from '../interface/categoria';
import { Marca } from '../interface/marca';
import { Modelo } from '../interface/modelo';
import { FormControl, FormGroup } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class MantenimientoService {
  private cateUrl = 'http://localhost:8080/categoria';
  private marUrl = 'http://localhost:8080/marca';
  private modelUrl = 'http://localhost:8080/modelo';

  cateFormato: FormGroup;

  constructor( private http: HttpClient ) {
    this.cateFormato = new FormGroup({
      nombreCategoria: new FormControl('')
    })
   }

  getCategorias(): Observable<Categoria[]> {
    return this.http.get<Categoria[]>(`${this.cateUrl}/list-all`);
  }
  getMarcas(): Observable<Marca[]> {
    return this.http.get<Marca[]>(`${this.marUrl}/list-all`);
  }
  getModelo(): Observable<Modelo[]>{
    return this.http.get<Modelo[]>(`${this.modelUrl}/list-all`);
  }

                  //guardar
  guardarMarca(marca: Marca): Observable<Marca>{
    return this.http.post<Marca>(`${this.marUrl}/add`, marca);
  }
  guardarCategoria(categoria: Categoria): Observable<Categoria>{
    return this.http.post<Categoria>(`${this.cateUrl}/add`, categoria)
  }
  guardarModelo(modelo: Modelo): Observable<Modelo>{
    return this.http.post<Modelo>(`${this.modelUrl}/add`, modelo);
  }
                  //Actializar
  actualizarMarca(id: number, marca: Marca): Observable<Marca>{
    return this.http.put<Marca>(`${this.marUrl}/update/${id}`, marca)
  }
  actulizarCategoria(id: number, categoria: Categoria): Observable<Categoria>{
    return this.http.put<Categoria>(`${this.cateUrl}/update/${id}`, categoria)
  }
  actualizacionModelo(id: number, modelo: Modelo): Observable<Modelo>{
    return this.http.put<Modelo>(`${this.modelUrl}/update/${id}`, modelo)
  }

  //delete
  eliminarMarca(id: number): Observable<Marca>{
    return this.http.delete<Marca>(`${this.marUrl}/delete/${id}`)
  }
  deleteCategoria(id: number): Observable<Categoria>{
    return this.http.delete<Categoria>(`${this.cateUrl}/delete/${id}`)
  }
  deleteModelo(id: number): Observable<Modelo>{
    return this.http.delete<Modelo>(`${this.modelUrl}/delete/${id}`)
  }
  
}
