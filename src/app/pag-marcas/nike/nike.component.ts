import { Component, OnInit } from '@angular/core';
import { MarcasService } from '../../service/marcas.service';
import { Marca } from '../../interface/marca';

@Component({
  selector: 'app-nike',
  templateUrl: './nike.component.html',
  styleUrl: './nike.component.css'
})
export class NikeComponent implements OnInit{

  marcasNike: Marca[] = [];

  constructor(
    private marcaService: MarcasService,
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

}
