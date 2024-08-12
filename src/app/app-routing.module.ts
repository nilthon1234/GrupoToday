import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import path from 'node:path';
import { IndexComponent } from './index/index.component';
import { ZapatillasComponent } from './zapatillas/zapatillas.component';
import { CarritoComponent } from './carrito/carrito.component';
import { NikeComponent } from './pag-marcas/nike/nike.component';
import { RebookComponent } from './pag-marcas/rebook/rebook.component';
import { AdidasComponent } from './pag-marcas/adidas/adidas.component';
import { PumaComponent } from './pag-marcas/puma/puma.component';
import { AdminIndexComponent } from './admin-index/admin-index.component';
import { DetalleComponent } from './admin-index/detalle/detalle.component';
import { AgregarComponent } from './admin-index/agregar/agregar.component';
import { MantenimientoService } from './service/mantenimiento.service';
import { CrudMantenimientoComponent } from './admin-index/crud-mantenimiento/crud-mantenimiento.component';

const routes: Routes = [
  { path: '', title: 'Index', component: IndexComponent},
  { path: 'zapatillas', component: ZapatillasComponent},
  { path: 'carrito', title: 'CARRITO', component: CarritoComponent},

  //paginas de zapatillas

  { path: 'adidas', title: 'ADIDAS', component: AdidasComponent},
  { path: 'nike', title: 'NIKE', component: NikeComponent},
  { path: 'rebook', title: 'REBOOK', component: RebookComponent},
  { path: 'puma', title: 'PUMA', component: PumaComponent},

  //paginas de Admin
  { path: 'admin', title: 'Administrador', component: AdminIndexComponent},
  { path: 'add', title: 'Agregar - Editar', component: AgregarComponent },
  { path: 'edit/:id', component: AgregarComponent }, // Agregar esta línea
  { path: 'zapatilla-detalle/:id', component: DetalleComponent }, // Agregar esta línea
  {path: 'mantenimiento', title: ' Admin crud', component: CrudMantenimientoComponent}, 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
