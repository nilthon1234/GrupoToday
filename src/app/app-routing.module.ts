import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import path from 'node:path';
import { IndexComponent } from './index/index.component';
import { ZapatillasComponent } from './zapatillas/zapatillas.component';
import { CarritoComponent } from './carrito/carrito.component';
import { NikeComponent } from './pag-marcas/nike/nike.component';
import { RebookComponent } from './pag-marcas/rebook/rebook.component';
import { NbComponent } from './pag-marcas/nb/nb.component';
import { AdidasComponent } from './pag-marcas/adidas/adidas.component';
import { PumaComponent } from './puma/puma.component';

const routes: Routes = [
  { path: '', component: IndexComponent},
  { path: 'zapatillas', component: ZapatillasComponent},
  { path: 'carrito', component: CarritoComponent},

  //paginas de zapatillas

  { path: 'adidas', component: AdidasComponent},
  { path: 'nike', component: NikeComponent},
  { path: 'rebook', component: RebookComponent},
  { path: 'puma', component: PumaComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
