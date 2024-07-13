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

@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    CarritoComponent,
    ZapatillasComponent,
    NikeComponent,
    RebookComponent,
    NbComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,

    HttpClientModule,
    

    ToastrModule.forRoot(),
    BrowserAnimationsModule,
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
