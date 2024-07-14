import { Component, OnInit } from '@angular/core';
import { MarcasService } from '../../service/marcas.service';
import { Marca } from '../../interface/marca';

@Component({
  selector: 'app-rebook',
  templateUrl: './rebook.component.html',
  styleUrl: './rebook.component.css'
})
export class RebookComponent implements OnInit {

  rebook: Marca[] = [];

  constructor(
    private marcaService: MarcasService
  ) { }

  ngOnInit(): void {
    this.listadoPuma();
      
  }
  listadoPuma(): void{
    this.marcaService.getMarcaRebook().subscribe(
      (data: Marca[]) => {
        this.rebook = data;
      },
      (error) => {
        console.error('Errror al listar Rebook',error);
      }
    );
  }

}
