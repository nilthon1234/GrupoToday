import { Component, OnInit } from '@angular/core';
import { FileUploadService } from '../service/file-upload.service';
import { Zapatilla } from '../interface/zapatilla';
import { ToastrService } from 'ngx-toastr';
import { Categoria } from '../interface/categoria';
import { Marca } from '../interface/marca';
import { Modelo } from '../interface/modelo';
import { error } from 'console';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-index',
  templateUrl: './admin-index.component.html',
  styleUrl: './admin-index.component.css',
})
export class AdminIndexComponent implements OnInit {

  MyDataZapatilla: Zapatilla[] = [];
  listCategoria: Categoria[] = [];
  myDataMarca: Marca[] = [];
  myDataModelo: Modelo[] = [];


  constructor(

    private fileUploadService: FileUploadService,
    private toastr: ToastrService,
    private router: Router) { }

  ngOnInit(): void {
    
    this.listMarcas();
    this.listModelo();

  }

  listMarcas() {
    this.fileUploadService.listAllMarcas().subscribe(
      (data: Marca[])=>{
        this.myDataMarca = data;
        this.getZapatillas();
      },
      (error) => {
        console.error('Error'+ error)
      }
    )
  }
  
  listModelo() {
    this.fileUploadService.listAllMode().subscribe(
      (myData: Modelo[]) =>{
        this.myDataModelo = myData;
        this.getZapatillas();
      },
      (error) =>{
        console.error('Error al listar', error)
      }
    )
  }
  
  

  getZapatillas() {
    this.fileUploadService.getZapatilla().subscribe(
      (data: Zapatilla[]) => {
        this.MyDataZapatilla = data;
      },
      (error) => {
        console.error('Error:', error);
      }
    );
  }

  

  verDetalles(id: number) {
    this.router.navigate(['/zapatilla-detalle', id]);
  }
  eliminarZapatilla(id: number): void{
      this.fileUploadService.deleteZapatilla(id).subscribe(
        (response) => {
          this.toastr.success('Se Elimino una Zapatilla','EXITO');
          this.getZapatillas();
        },
        (error) => {
          this.toastr.error(error.error.message, 'ERROR');
        }
      );
    
  }
  editarZapatilla(id: number) {
    this.router.navigate(['/edit', +id]);
  }

}
