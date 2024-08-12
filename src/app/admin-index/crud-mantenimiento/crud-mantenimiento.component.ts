import { Component, OnInit } from '@angular/core';
import { Categoria } from '../../interface/categoria';
import { MantenimientoService } from '../../service/mantenimiento.service';
import { Marca } from '../../interface/marca';
import { error } from 'console';
import { subscribe } from 'diagnostics_channel';
import { Modelo } from '../../interface/modelo';
import { ToastrService } from 'ngx-toastr';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-crud-mantenimiento',
  templateUrl: './crud-mantenimiento.component.html',
  styleUrl: './crud-mantenimiento.component.css'
})
export class CrudMantenimientoComponent implements OnInit{
  //listado
  cateZapatilla: Categoria[] = [];
  marca: Marca [] = [];
  modelo: Modelo[] = [];
  categoria: Categoria[] = [];

  //Agregar
  myCateFormato: FormGroup;
  Myformato:  FormGroup;
  myModeFormato: FormGroup;

  //editar marca
  editMode: boolean = false;
  myIdToEdit: number | null = null;
  //editar modelo
  editModeModelo: boolean = false;
  myIdToEditModelo: number | null = null;
  //editar categoria
  editModeCate: boolean = false;
  myIdToEditCate: number | null = null;


  constructor( private mantenimientoService: MantenimientoService,
                private toastr: ToastrService,
  ) {
    this.myCateFormato = new FormGroup({
      nombreCategoria: new FormControl('')
    })

    this.Myformato = new FormGroup({
      marcaZapatilla: new FormControl('')
    });

    this.myModeFormato = new FormGroup({
      nombreModeloZapatilla: new FormControl('')
    })
   } 

  ngOnInit(): void {
      this.listarCategoria();
      this.listarMarca();
      this.listaModelo();
  }

  agregarMarca(): void{
    console.log('Marca ID para actualizar:', this.myIdToEdit);
    const marcas: Marca = {
      marcaZapatilla: this.Myformato.get('marcaZapatilla')?.value
    };
    if (this.editMode && this.myIdToEdit !== null){
      this.mantenimientoService.actualizarMarca(this.myIdToEdit, marcas).subscribe(
        () =>{
          this.toastr.success('Marca Actualizada', 'EXITO' );
          this.Myformato.reset();
          this.editMode = false;
          this.myIdToEdit = null;
          this.listarMarca();
        }, error =>{
          console.error('Error al actualizar la marca', error);
          this.toastr.error('Error al actualizar la marca', 'ERROR' );
        }
      );
    }else{
      
      this.mantenimientoService.guardarMarca(marcas).subscribe(
        () => {
          this.toastr.success('Marca Guardada', 'EXITO' );
          this.Myformato.reset();
          this.listarMarca();
        },
        error => {
          console.error('Error al guardar la marca', error);
          this.toastr.error('Error al guardar la marca', 'ERROR' );
        }
      );
    }
  }

  redirecEditar(marca: Marca): void {
    this.Myformato.patchValue({
      marcaZapatilla: marca.marcaZapatilla,
    });
    this.myIdToEdit = marca.idMarcaZapatilla!;
    this.editMode = true;
  }
  agregarCategoria(): void{
    const categorias: Categoria = {
      nombreCategoria: this.myCateFormato.get('nombreCategoria')?.value
    };
    if(this.editModeCate && this.myIdToEditCate !== null){
      this.mantenimientoService.actulizarCategoria(this.myIdToEditCate, categorias).subscribe(
        () =>{
          this.toastr.success('Categoria Actualizada', 'Exito');
          this.myCateFormato.reset();
          this.editModeCate = false;
          this.myIdToEditCate = null;
          this.listarCategoria();
        }, error =>{
          console.error('Error al actualizar la categoria', error);
          this.toastr.error('Error al actualizar la categoria', 'ERROR');
        }
      );
    } else{
      this.mantenimientoService.guardarCategoria(categorias).subscribe(
        () => {
          this.toastr.success('Categoría Guardada', 'Exito');
          this.myCateFormato.reset();
          this.listarCategoria();
        },
        error => {
          console.error('Error al guardar la categoria', error);
          this.toastr.error('Error al guardar la categoria', 'ERROR');
        }
      )
    }
  }
  redirecCate(categoria: Categoria): void {
    this.myCateFormato.patchValue({
      nombreCategoria: categoria.nombreCategoria,
  });
  this.myIdToEditCate = categoria.idCategoria!;
  this.editModeCate = true;
}

  agregarModelo(): void {
    const modelos: Modelo ={
      nombreModeloZapatilla: this.myModeFormato.get('nombreModeloZapatilla')?.value
    };
    if(this.editModeModelo && this.myIdToEditModelo !== null){
      this.mantenimientoService.actualizacionModelo(this.myIdToEditModelo, modelos).subscribe(
        () => {
          this.toastr.success('modelo actualizado', 'EXITO');
          this.myModeFormato.reset();
          this.editModeModelo = false;
          this.myIdToEditModelo = null;
          this.listaModelo();
        }, error =>{
            console.error('Error al actualizar el modelo', error);
            this.toastr.error('Error al actualizar el modelo', 'ERROR');
        }
      );
    } else {
      this.mantenimientoService.guardarModelo(modelos).subscribe(
        () => {
          this.toastr.success('Modelo Registrado');
          this.myModeFormato.reset();
          this.editModeModelo = false;
          this.myIdToEditModelo = null;
          this.listaModelo();
        }, error => {
          console.error('Error al guardar', error);
          this.toastr.error('Error al guardar', 'ERROR');
        }
      )
    }
  }

  redirectModelo(modelo: Modelo): void{
    this.myModeFormato.patchValue({
      nombreModeloZapatilla: modelo.nombreModeloZapatilla,
    });
    this.myIdToEditModelo = modelo.idModeloZapatilla!;
    this.editModeModelo = true;
  }
  listarCategoria(): void {
    this.mantenimientoService.getCategorias().subscribe(
      (data: Categoria[]) => {
        this.cateZapatilla = data;
      },
      error => {
        console.error('Error al obtener las categorias', error);
      }
    );
  }
  listarMarca(): void {
    this.mantenimientoService.getMarcas().subscribe(
      (data: Marca[]) => {
        this.marca = data;
      },
      error => {
        console.error('Error al obtener el listado de las marcas', error);
      }
    );
  }
  listaModelo(): void {
    this.mantenimientoService.getModelo().subscribe(
      (data: Modelo[]) =>{
        this.modelo = data;
      },
      error => {
        console.error('Error al listar los modelos', error);
      }
    );
  };
  
  eliminarMarca(id: number): void {
    this.mantenimientoService.eliminarMarca(id).subscribe(
      () => {
        this.toastr.success('marca Eliminada', 'EXITO' );
        
        this.listarMarca();
      },
      error => {
        console.error('Error al eliminar la marca', error);
        this.toastr.warning('Esta marca esta siendo utilizada', 'Advertencia');
      }
    );
  }
  eliminarCategorias(id: number){
    this.mantenimientoService.deleteCategoria(id).subscribe(
      () => {
        this.toastr.success('Categoria Eliminado', 'EXITO' );
        
        this.listarCategoria();
      },
      error => {
        console.error('Error al eliminar la categoria', error);
        this.toastr.warning('Esta Categoria esta siendo utilizada', 'ERROR');
      }
    );
  }
  eliminarModelo(id: number): void {
    this.mantenimientoService.deleteModelo(id).subscribe(
      () => {
        this.toastr.success('modelo eliminado', 'EXITO' );
        
        this.listaModelo();
      },
      error => {
        console.error('Error al eliminar el modelo', error);
        this.toastr.warning('Error al eliminar el modelo', 'ERROR');
      }
    );
  }

  
}
