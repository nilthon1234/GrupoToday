import { Component, OnInit } from '@angular/core';
import { FileUploadService } from '../../service/file-upload.service';
import { Zapatilla } from '../../interface/zapatilla';
import { Categoria } from '../../interface/categoria';
import { ToastrService } from 'ngx-toastr';
import { Marca } from '../../interface/marca';
import { Modelo } from '../../interface/modelo';
import { Persona } from '../../interface/persona';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styleUrls: ['./agregar.component.css']
})
export class AgregarComponent implements OnInit {

  //add Zapatilla
  zapatilla: Zapatilla = {
    nombreZapatilla: '',
    descripcionZapatilla: '',
    precioZapatilla: '',
    stockZapatilla: '',
    imagenZapatilla: '',
    idAdminZapatillas: 0,
    idModeloZapatilla: -1,
    idCategoriaZapatilla: -1,
    idMarcaZapatilla: -1,
    idPersonaZapatilla: -1
  };
  file?: File | null = null;

  // Para almacenar el nombre de la imagen
  imagenNombre: string = '';

  //list
  categorias: Categoria[] = [];
  marcas: Marca[] = [];
  modelo: Modelo[] = [];
  persona: Persona[] = [];

  //update
  editar: boolean = false;
  zapatillaId: number | null = null;

  constructor(
    private fileService: FileUploadService,
    private toastr: ToastrService,
    private router: Router,
    private route: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    this.liscate();
    this.listMarcas();
    this.listPersonas();
    this.listModelos();

    this.route.params.subscribe(params => {
      if (params['id']) {
        this.editar = true;
        this.zapatillaId = +params['id'];
        this.getZapatillaById(this.zapatillaId);  
      }
    });
  }

  getZapatillaById(id: number): void {
    this.fileService.buscarId(id).subscribe(
      (data: any) => {
        this.zapatilla = data;
        this.imagenNombre = this.getImageName(data.urlImg); // Almacena el nombre de la imagen
      },
      (error) => {
        console.error('Error al obtener detalles de la zapatilla', error);
        this.toastr.error('Error al cargar datos de la zapatilla', 'Error!');
      }
    );
  }

  getImageName(url: string): string {
    // Extrae el nombre del archivo de la URL
    return url.split('/').pop() || '';
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

  listMarcas(): void {
    this.fileService.listAllMarcas().subscribe(
      (data: Marca[]) => {
        this.marcas = data;
      },
      (error) => {
        console.error('Error al listar marcas', error);
      }
    );
  }

  listModelos(): void {
    this.fileService.listAllMode().subscribe(
      (data: Modelo[]) => {
        this.modelo = data;
      },
      (error) => {
        console.error('Error al listar modelos', error);
      }
    );
  }

  listPersonas(): void {
    this.fileService.listAllPersonas().subscribe(
      (data: Persona[]) => {
        this.persona = data;
      },
      (error) => {
        console.error('Error al listar personas', error);
      }
    );
  }

  onFileChangue(event: any) {
    this.file = event.target.files[0];
    this.imagenNombre = this.file ? this.file.name : ''; // Actualiza el nombre de la imagen
  }

  onSubmit(): void {
    if (this.editar && this.zapatillaId !== null) {
      // Si se seleccionó un nuevo archivo, actualizar con la nueva imagen
      if (this.file) {
        this.fileService.updateZapatilla(this.zapatillaId, this.zapatilla, this.file).subscribe(
          () => {
            this.toastr.success('Zapatilla actualizada con éxito!', 'Éxito!');
            this.router.navigate(['/admin']);
          },
          (error) => {
            console.error('Error al actualizar la zapatilla:', error);
            this.toastr.error(error.error.message, 'Error!');
          }
        );
      } else {
        // Si no se seleccionó un nuevo archivo, actualizar los otros campos y mantener la imagen actual
        this.fileService.updateZapatilla(this.zapatillaId, this.zapatilla).subscribe(
          () => {
            this.toastr.success('Zapatilla actualizada con éxito!', 'Éxito!');
            this.router.navigate(['/admin']);
          },
          (error) => {
            console.error('Error al actualizar la zapatilla:', error);
            this.toastr.error(error.error.message, 'Error!');
          }
        );
      }
    } else {
      // Lógica para agregar una nueva zapatilla
      this.fileService.addZapatilla(this.zapatilla, this.file!).subscribe(
        () => {
          this.toastr.success('Zapatilla Agregada', 'Éxito!');
          this.router.navigate(['/admin']);
        },
        (error) => {
          console.error('Error al registrar la zapatilla:', error);
          this.toastr.error(error.error.message, 'Error!');
        }
      );
    }
  }
}