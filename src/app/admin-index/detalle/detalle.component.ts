import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from 'express';
import { Zapatilla } from '../../interface/zapatilla';
import { FileUploadService } from '../../service/file-upload.service';
import { error } from 'console';
import { Categoria } from '../../interface/categoria';

@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.component.html',
  styleUrl: './detalle.component.css'
})
export class DetalleComponent implements OnInit {
  zapatilla: Categoria | null = null;

  constructor(
    private route: ActivatedRoute,
    private fileUploadService: FileUploadService
  ){}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.fileUploadService.detalleId(+id).subscribe(
        (data: Categoria) => {
          this.zapatilla = data;
        },
        (error) => {
          console.error('Error:', error);
        }
      );
    }
      
  }

}
