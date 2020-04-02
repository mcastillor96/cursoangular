import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { SobreNosotrosComponent } from './sobre-nosotros/sobre-nosotros.component';
import { LibrosComponent } from './libros/libros.component';
import { CabeceraComponent } from './cabecera/cabecera.component';
import { InicioComponent } from './inicio/inicio.component';
import { ErrorComponent } from './error/error.component';
import { InformacionComponent } from './informacion/informacion.component';
// importamos el servicio creado
import { LibroclickedService } from './libroclicked.service';

// el orden de las rutas es SUPER IMPORTANTE
// las rutas manejadas (con path especifico) se ponen PRIMERAS. Cuanto más específico más arriba
// el resto (inicio y no definidos)
const rutas: Routes = [
  {path: 'listado-libros', component: LibrosComponent},
  // acceder a un libro en específico
  {path: 'informacion/:libroId', component: InformacionComponent},
  {path: 'informacion', redirectTo: '/' },
  {path: '', component: InicioComponent, pathMatch: 'full'}, // pathMatch: 'full' con esto indicamos que es el componente por defecto
  {path: '**', component: ErrorComponent},
];

@NgModule({
  declarations: [
    AppComponent,
    SobreNosotrosComponent,
    LibrosComponent,
    CabeceraComponent,
    InicioComponent,
    ErrorComponent,
    InformacionComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(rutas) // encadenamos .forRoot y le pasamos nuestras rutas
  ],
  // el servicio es el provider
  providers: [
    LibroclickedService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
