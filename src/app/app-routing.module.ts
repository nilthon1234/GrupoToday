import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import path from 'node:path';
import { IndexComponent } from './index/index.component';
import { ZapatillasComponent } from './zapatillas/zapatillas.component';
import { CarritoComponent } from './carrito/carrito.component';

const routes: Routes = [
  { path: '', component: IndexComponent},
  { path: 'zapatillas', component: ZapatillasComponent},
  { path: 'carrito', component: CarritoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
