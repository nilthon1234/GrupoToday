import { HttpClient, HttpEventType } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FileUploadService {

  private baseUrl = 'http://localhost:8080/file/upload';

  constructor(private http: HttpClient, private toastr: ToastrService) {}

  uploadFile(file: File): Observable<any> {
    const formData = new FormData();
    formData.append('file', file, file.name);

    return new Observable(observer => {
      this.http.post(this.baseUrl, formData, {
        reportProgress: true,
        observe: 'events'
      }).subscribe(event => {
        if (event.type === HttpEventType.UploadProgress) {
          const progress = Math.round(100 * (event.loaded / (event.total || 1)));
          observer.next({ status: 'progress', message: progress });
        } else if (event.type === HttpEventType.Response) {
          this.toastr.success('Archivo subido exitosamente.');
          observer.next({ status: 'success', message: event.body });
          observer.complete();
        }
      }, error => {
        this.toastr.error('Error al subir el archivo.');
        observer.error(error);
      });
    });
  }
}