import { Component, OnInit } from '@angular/core';
import { FileUploadService } from '../service/file-upload.service';
import { Zapatilla } from '../interface/zapatilla';
import { ToastrService } from 'ngx-toastr';
import { Categoria } from '../interface/categoria';
import { Marca } from '../interface/marca';
import { Modelo } from '../interface/modelo';
import { error } from 'console';

@Component({
  selector: 'app-admin-index',
  templateUrl: './admin-index.component.html',
  styleUrl: './admin-index.component.css',
})
export class AdminIndexComponent implements OnInit {

  /*zapatilla: Zapatilla = {
    nombreZapatilla: '',
    descripcionZapatilla: '',
    precioZapatilla: '',
    stockZapatilla: '',
    imagenZapatilla: '',
    idAdminZapatillas: 0,
    idModeloZapatilla: 0,
    idCategoriaZapatilla: 0,
    idMarcaZapatilla: 0,
    idPersonaZapatilla: 0
  };
  file: File | null = null;*/
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
    private toastr: ToastrService) { }

  ngOnInit(): void {
    this.liscate();
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
  liscate() {
    this.fileUploadService.listAllCategories().subscribe(
      (data: Categoria[]) => {
        this.listCategoria = data;
        this.getZapatillas();
      },
      (error) => {
        console.error('Error:', error);
      }
    );
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

  /*onFileChange(event: any) {
    this.file = event.target.files[0];
  }

  onSubmit() {
    if (this.file) {
      this.fileUploadService.addZapatilla(this.zapatilla, this.file).subscribe(
        (response) => {
          console.log('Zapatilla Registrada:', response);
          alert('Zapatilla Registrada en la base de datos');
        },
        (error) => {
          console.error('Error:', error);
          alert('Ocurrió un error al registrar la zapatilla');
        }
      );
    } else {
      alert('Por favor, selecciona una imagen.');
    }
  }*/


}