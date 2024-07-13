import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import path from 'node:path';
import { IndexComponent } from './index/index.component';
import { ZapatillasComponent } from './zapatillas/zapatillas.component';
import { CarritoComponent } from './carrito/carrito.component';
import { NikeComponent } from './pag-marcas/nike/nike.component';
import { RebookComponent } from './pag-marcas/rebook/rebook.component';
import { NbComponent } from './pag-marcas/nb/nb.component';

const routes: Routes = [
  { path: '', component: IndexComponent},
  { path: 'zapatillas', component: ZapatillasComponent},
  { path: 'carrito', component: CarritoComponent},

  //paginas de zapatillas
  { path: 'nike', component: NikeComponent},
  { path: 'rebook', component: RebookComponent},
  { path: 'nb', component: NbComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
