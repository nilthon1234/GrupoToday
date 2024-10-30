import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IndexComponent } from './index/index.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule} from 'ngx-toastr';
import { HttpClientModule } from '@angular/common/http';
import { CarritoComponent } from './carrito/carrito.component';
import { ZapatillasComponent } from './zapatillas/zapatillas.component';
import { NikeComponent } from './pag-marcas/nike/nike.component';
import { RebookComponent } from './pag-marcas/rebook/rebook.component';
import { NbComponent } from './pag-marcas/nb/nb.component';
import { AdidasComponent } from './pag-marcas/adidas/adidas.component';
import { provideHttpClient, withFetch} from '@angular/common/http';
import { PumaComponent } from './pag-marcas/puma/puma.component';
import { AdminIndexComponent } from './admin-index/admin-index.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DetalleComponent } from './admin-index/detalle/detalle.component';
import { Router, RouterModule } from '@angular/router';
import { AgregarComponent } from './admin-index/agregar/agregar.component';
import { CrudMantenimientoComponent } from './admin-index/crud-mantenimiento/crud-mantenimiento.component';
import { NavIndexComponent } from './nav-index/nav-index.component';

@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    CarritoComponent,
    ZapatillasComponent,
    NikeComponent,
    RebookComponent,
    NbComponent,
    AdidasComponent,
    PumaComponent,
    AdminIndexComponent,
    DetalleComponent,
    AgregarComponent,
    CrudMantenimientoComponent,
    NavIndexComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,

    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,

    ToastrModule.forRoot(
      {
        positionClass: 'toast-bottom-right',
        timeOut: 5000,
        progressBar: true,
        preventDuplicates: true,
      }
    ),
    BrowserAnimationsModule,
  ],
  providers: [
    provideClientHydration(),
    provideHttpClient(withFetch())// campo agregado por jhon
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
