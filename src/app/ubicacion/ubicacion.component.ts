import { Component, OnInit } from '@angular/core';
import {showup} from '../animations/telon.animation';




@Component({
  selector: 'app-ubicacion',
  templateUrl: './ubicacion.component.html',
  styleUrls: ['./ubicacion.component.scss'],
  animations:[showup]
  
  

})
export class UbicacionComponent implements OnInit {


  public moreinformation:boolean = false;

  imagenmuestra:string='assets/Imagenes/ninosonrie.jpg'

  imagenmuestra2:string='assets/Imagenes/ninoserio.jpg'










ubicaciones:any[]=[
{
  imagen:'assets/Imagenes/muestra1.jpg'
},
{
  imagen:'assets/Imagenes/muestra2.jpg'
},
{
  imagen:'assets/Imagenes/muestra3.jpg'
},
{
  imagen:'assets/Imagenes/muestra4.jpg'
}



]

  constructor() { }

  ngOnInit(): void {
  }

changevalue()
{
  this.moreinformation = this.moreinformation === true ? false : true
console.log(this.moreinformation)  

}
  

}
