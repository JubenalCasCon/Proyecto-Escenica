import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';
import {RouterModule,Routes} from '@angular/router'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { InicioComponent } from './inicio/inicio.component';
import { CarteleraComponent } from './cartelera/cartelera.component';
import { CalendarioComponent } from './calendario/calendario.component';
import { UbicacionComponent } from './ubicacion/ubicacion.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ElencoComponent } from './elenco/elenco.component';

const routes:Routes=[{path:'',component:InicioComponent},
                    {path:'cartelera',component:CarteleraComponent},  
                    {path:'calendario',component:CalendarioComponent},
                    {path:'ubicacion',component:UbicacionComponent},
                    {path:'elenco',component:ElencoComponent}]
                    
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    InicioComponent,
    CarteleraComponent,
    CalendarioComponent,
    UbicacionComponent,
    ElencoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(routes),
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
