import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

piepaginas:any=[]=
[

{
  campo:'Dirección',
  descripcion: 'Col centro Frente a Wolwort'
},

{
  campo:'Teléfono',
  descripcion: '6688141512'
},

{
  campo:'Email',
  descripcion: 'Escuelavocacional@gmail.com'
}





]


  constructor() { }

  ngOnInit(): void {
  }

}
