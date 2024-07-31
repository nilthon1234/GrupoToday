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
  zapatilla: Zapatilla = {
    nombreZapatilla: '',
    descripcionZapatilla: '',
    precioZapatilla: '',
    stockZapatilla: '',
    imagenZapatilla: '',
    idAdminZapatillas: 0,
    idModeloZapatilla: 0,
    idCategoriaZapatilla: 0,
    idMarcaZapatilla: 0,
    idPersonaZapatilla: 0,

  };
  file: File | null = null;


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
  assigMarcaName(){
    this.MyDataZapatilla.forEach(zapatilla => {
      const marca = this.myDataMarca.find( m => m.idMarcaZapatilla === zapatilla.idMarcaZapatilla );
    if(marca){
      zapatilla.marca = marca;
    }
    });
  }

  assignCategoryNames() {
    this.MyDataZapatilla.forEach(zapatilla => {
      const categoria = this.listCategoria.find(c => c.idCategoria === zapatilla.idCategoriaZapatilla);
      if (categoria) {
        zapatilla.categoria = categoria;
      }
    });
  }
  assignModeloName() {
    this.MyDataZapatilla.forEach(zapatilla =>{
      const modelo = this.myDataModelo.find(m => m.idModeloZapatilla === zapatilla.idModeloZapatilla);
      if(modelo){
        zapatilla.modelo = modelo;
      }
    })
  }

  getZapatillas() {
    this.fileUploadService.getZapatilla().subscribe(
      (data: Zapatilla[]) => {
        this.MyDataZapatilla = data;
        this.assignCategoryNames();
        this.assigMarcaName();
        this.assignModeloName();
      },
      (error) => {
        console.error('Error:', error);
      }
    );
  }

  onFileChange(event: any) {
    this.file = event.target.Files[0];
  }

  onSubmit() {
    if (this.file) {
      this.fileUploadService.addZapatilla(this.zapatilla, this.file).subscribe(
        (response) => {
          console.log('Zapatilla Registrada:', response);
          this.toastr.success('message', 'EXITO');

        },
        (error) => {
          console.error('Error:', error);
          this.toastr.error('message', 'ERROR');
        }
      );
    }
  }

  verDetalles(id: number) {
    this.router.navigate(['/zapatilla-detalle', id]);
  }
  eliminarZapatilla(id: number) {
    if (confirm('Estas seguro de eliminar la zapatilla?')) {
      this.fileUploadService.deleteZapatilla(id).subscribe(
        (response) => {
          console.log('Zapatilla Eliminada:', response);
          this.getZapatillas();
          this.toastr.success('message', 'EXITO');
        },
        (error) => {
          console.error('Error:', error);
          this.toastr.error('message', 'ERROR');
        }
      );
    }
  }

}
