import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
iconoteatro:string="assets/Imagenes/teatro.png";



  collapsed=true;

  elementos:any[]=[
    {
      nombre:'Inicio',
      ruta:'/'
    },

    {
      nombre:'Cartelera',
      ruta:'/cartelera'
    },

    {
      nombre:'Elenco',
      ruta:'/elenco'
    },

    {
      nombre:'Ubicacion',
      ruta:'/ubicacion'
    },

    {
      nombre:"Calendario",
      ruta:'/calendario'
    }

    


  ]


  constructor() { }

  ngOnInit(): void {
  }

}
