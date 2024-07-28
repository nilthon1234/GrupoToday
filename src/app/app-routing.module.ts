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

const routes: Routes = [
  { path: '', component: IndexComponent},
  { path: 'zapatillas', component: ZapatillasComponent},
  { path: 'carrito', component: CarritoComponent},

  //paginas de zapatillas

  { path: 'adidas', component: AdidasComponent},
  { path: 'nike', component: NikeComponent},
  { path: 'rebook', component: RebookComponent},
  { path: 'puma', component: PumaComponent},

  //paginas de Admin
  {path: 'admin', component: AdminIndexComponent},
  {path: 'add', component: AgregarComponent },

  { path: 'zapatilla-detalle/:id', component: DetalleComponent }, // Agregar esta línea
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
