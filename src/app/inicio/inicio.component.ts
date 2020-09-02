import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.scss']
})
export class InicioComponent implements OnInit {

  imagenprueba:string="assets/Imagenes/teatro4.jpg"

  imagenprueba2:string="assets/Imagenes/ninosonrie.jpg"


  imagenelenco:string="assets/Imagenes/elenco.jpg"

  musicainicio:string="assets/Imagenes/circus.m4a"


  tarjetas:any[]=[

    {
      imagen:"assets/Imagenes/elenco.jpg",
      descripcion:"La puesta en escena mas esperada del año se desarrollará en los Mochis Sinaloa"
    },

    {
      imagen:"assets/Imagenes/danza.jpg",
      descripcion:"El año internacional del teatro es una iniciativa artística en la que se celebrará"
    },

    {
      imagen:"assets/Imagenes/teatro2.jpg",
      descripcion:"Nuevos miembros se agregan al elencon EVA 2020 durante el castig para su próxima obra"
    },

    {
      imagen:"assets/Imagenes/teatro3.jpg",
      descripcion:"Nuevos miembros se agregan al elencon EVA 2020 durante el castig para su próxima obra"
    },

    {
      imagen:"assets/Imagenes/teatro.jpg",
      descripcion:"Nuevos miembros se agregan al elencon EVA 2020 durante el castig para su próxima obra"
    },

    {
      imagen:"assets/Imagenes/teatro6.jpg",
      descripcion:"Nuevos miembros se agregan al elencon EVA 2020 durante el castig para su próxima obra"
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
