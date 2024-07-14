import { HttpClientModule, provideHttpClient, withFetch, } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { BrowserModule, provideClientHydration } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { ToastrModule } from "ngx-toastr";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { CarritoComponent } from "./carrito/carrito.component";
import { IndexComponent } from "./index/index.component";
import { AdidasComponent } from "./pag-marcas/adidas/adidas.component";
import { NbComponent } from "./pag-marcas/nb/nb.component";
import { NikeComponent } from "./pag-marcas/nike/nike.component";
import { PumaComponent } from "./pag-marcas/puma/puma.component";
import { RebookComponent } from "./pag-marcas/rebook/rebook.component";
import { ZapatillasComponent } from "./zapatillas/zapatillas.component";



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
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,

    HttpClientModule,
    FormsModule,

    ToastrModule.forRoot(),
    BrowserAnimationsModule,
  ],
  providers: [
    provideClientHydration(),
    provideHttpClient(withFetch()) // campo agregado por jhon
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
