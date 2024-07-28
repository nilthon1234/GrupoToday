import { Injectable } from '@angular/core';
import { HttpClient, HttpEventType } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ToastrService } from 'ngx-toastr';
import { Zapatilla } from '../interface/zapatilla';
import { Categoria } from '../interface/categoria';
import { Marca } from '../interface/marca';
import { Modelo } from '../interface/modelo';
import { Persona } from '../interface/persona';

@Injectable({
  providedIn: 'root'
})
export class FileUploadService {
  private apiUrl = 'http://localhost:8080/api/v1/zapatilla';
  private cateUrl = 'http://localhost:8080/categoria';
  private marUrl = 'http://localhost:8080/marca';
  private modeUrl = 'http://localhost:8080/modelo'
  private personaUrl = 'http://localhost:8080/persona'
  private adminUrl = 'http://localhost:8080/admin'

  constructor(private http: HttpClient) {}
  /*addZapatilla(zapatilla: Zapatilla, file: File): Observable<any> {
    const formData: FormData = new FormData();
    formData.append('file', file);
    formData.append('zapatillaDto', JSON.stringify(zapatilla));

    return this.http.post(`${this.apiUrl}/add-zapatilla`, formData);
  }*/

  addZapatilla(zapatilla: Zapatilla, file: File): Observable<Zapatilla>{
    const formData: FormData = new FormData();
    formData.append('file', file);
    formData.append('zapatillaDto', JSON.stringify(zapatilla));

    return this.http.post<Zapatilla>(`${this.apiUrl}/add-zapatilla`, formData);
  }
  getZapatilla(): Observable<Zapatilla[]> {
    return this.http.get<Zapatilla[]>(`${this.apiUrl}/list-zapatilla`);
  }

  listAllCategories(): Observable<Categoria[]> {
    return this.http.get<Categoria[]>(`${this.cateUrl}/list-all`);
  }
  listAllMarcas(): Observable<Marca[]> {
    return this.http.get<Marca[]>(`${this.marUrl}/list-all`);
  }

  listAllMode(): Observable<Modelo[]>{
    return this.http.get<Modelo[]>(`${this.modeUrl}/list-all`);
  }
  listAllPersonas(): Observable<Persona[]>{
    return this.http.get<Persona[]>(`${this.personaUrl}/list-all`);
  }
  detalleId(id: number): Observable<Categoria>{
    return this.http.get<Categoria>(`${this.apiUrl}/${id}`);
  }

}
