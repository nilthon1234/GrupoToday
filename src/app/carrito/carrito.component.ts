// carrito.component.ts
import { Component, OnInit } from '@angular/core';
import { VentaBoletaService } from '../service/venta-boleta.service';
import { Carrito } from '../interface/carrito';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { DetalleDto, VentaBoleta } from '../interface/venta-boleta';
import { ToastrService } from 'ngx-toastr';
import { Departamento } from '../interface/departamento';
import { __values } from 'tslib';
import { response } from 'express';
import { error } from 'console';

@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.component.html',
  styleUrl: './carrito.component.css'
})
export class CarritoComponent implements OnInit{

  carrito: DetalleDto[] = [];
  depa: Departamento[] = [];
  ventaForm!: FormGroup;
  total: number = 0;
  constructor(private ventaBoletaService: VentaBoletaService,
              private fb: FormBuilder,
              private toastr: ToastrService) {
    
  }

  ngOnInit(): void {
    this.initForm();
    this.listarDepartamento();
    this.ventaBoletaService.carrito$.subscribe(carrito => {
      this.carrito = carrito;
      this.updateDetalles();
    });
  }

  initForm(){

    this.ventaForm = this.fb.group({
      ventaDto: this.fb.group({
        nombreCliente: ['', Validators.required],
        apellidoCliente: ['', Validators.required],
        gmailCliente: ['', [Validators.required, Validators.email]],
        telefonoCliente: ['', Validators.required],
        direccionCliente: ['', Validators.required],
        idDepartamento: ['', Validators.required],
      }),
      detalles: this.fb.array([])
    });
  }

  get detalles() {
    return this.ventaForm.get('detalles') as FormArray;
  }
  updateDetalles() {
    const detallesArray = this.detalles;
    detallesArray.clear();
    this.carrito.forEach(producto => {
      const detalleGroup = this.fb.group({
        idZapatilla: [producto.idZapatilla, Validators.required],
        nombreZapatilla: [producto.nombreZapatilla],
        marcaZapatilla: [producto.marcaZapatilla],
        precioZapatilla: [producto.precioZapatilla, Validators.required],
        cantidad: [producto.cantidad, [Validators.required, Validators.min(1)]],
        img: [producto.img],
      });
      detallesArray.push(detalleGroup);
      detalleGroup.get('cantidad')?.valueChanges.subscribe(() =>{
        this.calcularTotal();
      });
    });
    this.calcularTotal();

  }
  calcularTotal() {
    this.total = 0;
    this.detalles.controls.forEach(detalle => {
      const precio = detalle.get('precioZapatilla')?.value;
      const cantidad = detalle.get('cantidad')?.value;
      this.total += precio * cantidad;
    });
  }

  listarDepartamento() {
    this.ventaBoletaService.listDepartamento(). subscribe (
      (data: Departamento[]) => {
        this.depa = data
      }
    );
  }

  registrarVenta(){
    if(this.ventaForm.valid){
      const ventaBoleta: VentaBoleta = this.ventaForm.value
      this.ventaBoletaService.registrarVenta(ventaBoleta).subscribe(
        (response) => {
          console.log('venta registrada', response.mensaje);
          this.toastr.success('Transaccion Registrada')
        },
        (error) => {
          console.error('error al registrar', error.mensaje);
        }
      );
    } else {
      console.log('el formulario no es valido')
    }
  }

  
    
}