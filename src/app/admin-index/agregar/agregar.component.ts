import { Component, OnInit } from '@angular/core';
import { FileUploadService } from '../../service/file-upload.service';
import { Zapatilla } from '../../interface/zapatilla';
import { Categoria } from '../../interface/categoria';
import { ToastrService } from 'ngx-toastr';
import { Marca } from '../../interface/marca';
import { Modelo } from '../../interface/modelo';
import { Persona } from '../../interface/persona';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styleUrl: './agregar.component.css'
})
export class AgregarComponent implements OnInit{

  zapatilla: Zapatilla = {
    nombreZapatilla:      '',
    descripcionZapatilla: '',
    precioZapatilla:      '',
    stockZapatilla:       '',
    imagenZapatilla:      '',
    idAdminZapatillas:    0,
    idModeloZapatilla:    -1,
    idCategoriaZapatilla: -1,
    idMarcaZapatilla:     -1,
    idPersonaZapatilla:   -1
  };
  categorias: Categoria[] = [];
  marcas: Marca[] = [];
  modelo: Modelo[] = [];
  persona: Persona[] = [];
  file: File | null = null;

constructor(
  private fileService: FileUploadService,
  private toastr: ToastrService,
){}
  ngOnInit(): void {
      this.liscate();
      this.listMarcas();
      this.listPersonas();
      this.listModelos();
  }
  liscate(): void {
    this.fileService.listAllCategories().subscribe(
      (data: Categoria[]) => {
        this.categorias = data;
      },
      (error) => {
        console.error('Error al listar categorías', error);
      }
  );
  }
  listMarcas(): void{
    this.fileService.listAllMarcas().subscribe(
      (data: Marca[]) => {
        this.marcas = data;
      },
      (error) => {
        console.error('Error al listar marcas', error);
      }
    );
  }
  listModelos(): void{
    this.fileService.listAllMode().subscribe(
      (data: Modelo[]) => {
        this.modelo = data;
      },
      (error) => {
        console.error('Error al listar modelos', error);
      }
    );
  }
  listPersonas(): void{
    this.fileService.listAllPersonas().subscribe(
      (data: Persona[]) => {
        this.persona = data;
      },
      (error) => {
        console.error('Error al listar personas', error);
      }
    );
  }

  onFileChangue(event: any){
    this.file = event.target.files[0];
  }
  onSubmit(): void {
    console.log(this.zapatilla);
    if (this.file) {
      this.fileService.addZapatilla(this.zapatilla, this.file).subscribe(
        (response) => {
          console.log('Zapatilla registrada:', response);
          this.toastr.success('Zapatilla registrada con éxito!', 'Éxito!');
        },
        (error) => {
          console.error('Error al registrar la zapatilla:', error);
          this.toastr.error('Error al registrar la zapatilla!', 'Error!');
        }
      );
    } else {
      console.error('No se ha seleccionado ningún archivo.');
    }
  }

}
