import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cartelera',
  templateUrl: './cartelera.component.html',
  styleUrls: ['./cartelera.component.scss']
})
export class CarteleraComponent implements OnInit {

  imagenportada:string="assets/Imagenes/director.jpg"


  constructor() { }

  ngOnInit(): void {
  }

}
