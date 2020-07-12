import { Component, OnInit } from '@angular/core';
import {mostrartrayectoria} from '../animations/trayectoria.animation'



@Component({
  selector: 'app-elenco',
  templateUrl: './elenco.component.html',
  styleUrls: ['./elenco.component.scss'],
  animations:[mostrartrayectoria]
})
export class ElencoComponent implements OnInit {


public disparador:boolean =false

  imagenmuestra:string='assets/Imagenes/Actorgenerico.jpg'

  imagenmuestra2:string='assets/Imagenes/actrizgenerica.jpg'

  

  galerias:any[]=[
    {
      url:'assets/Imagenes/gilbertos.jpg',
      sec:'assets/Imagenes/gilbertof.jpg',
      target:"#targetgil",
      dir:"targetgil",
      des:"descripcion1"
      
     
    },
 
    {
     url:'assets/Imagenes/yazs.jpg',
     sec:'assets/Imagenes/yazf.jpg',
     target:"#targetyaz",
      dir:"targetyaz",
     des:"descripcion1"
     
    
   },
 
   {
     url:'assets/Imagenes/olivers.jpg',
     sec:'assets/Imagenes/oliverf.jpg',
     target:"#targetoliver",
      dir:"targetoliver",
     des:"descripcion1"
    
    
   },
 
   {
     url:'assets/Imagenes/nats.jpg',
     sec:'assets/Imagenes/natf.jpg',
     target:"#targetnat",
      dir:"targetnat",
     des:"descripcion1"
    
    
   },
 
   {
     url:'assets/Imagenes/juans.jpg',
     sec:'assets/Imagenes/juanf.jpg',
     target:"#targetjuan",
      dir:"targetjuan",
     des:"descripcion1"
     
    
   },
 
   {
     url:'assets/Imagenes/omars.jpg',
     sec:'assets/Imagenes/omarf.jpg',
     target:"#targetomar",
      dir:"targetomar",
     des:"descripcion1"
     
    
   },
 
   {
     url:'assets/Imagenes/jorgitof.jpg',
     sec:'assets/Imagenes/jorgitos.jpg',
     target:"#targetjorgito",
      dir:"targetjorgito",
     des:"descripcion1"
     
    
   },
 
   {
     url:'assets/Imagenes/ovideof.jpg',
     sec:'assets/Imagenes/ovideof.jpg',
     target:"#targetovideo",
      dir:"targetovideo",
     des:"descripcion1"
     
    
   },
 
   
 
 
 
 
 
   ];
 

   modales:any[]=[
    {
      url:'assets/Imagenes/gilbertos.jpg',
      dir:"targetgil",
      descripcion:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio magnam alias aliquid laborum voluptas nostrum hic vitae ad animi voluptatum nihil natus repellat, maiores doloribus iste libero voluptate vel magni.",
      nombreartistico:"Gilberto Rousse"
      
     
    },
 
    {
     url:'assets/Imagenes/yazs.jpg',
     dir:"targetyaz",
     descripcion:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio magnam alias aliquid laborum voluptas nostrum hic vitae ad animi voluptatum nihil natus repellat, maiores doloribus iste libero voluptate vel magni.",
     nombreartistico:"Yazz C."
     
    
   },
 
   {
     url:'assets/Imagenes/olivers.jpg',
     dir:"targetoliver",
     descripcion:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio magnam alias aliquid laborum voluptas nostrum hic vitae ad animi voluptatum nihil natus repellat, maiores doloribus iste libero voluptate vel magni.",
     nombreartistico:"Oliver C."

    
   },
 
   {
     url:'assets/Imagenes/nats.jpg',
     dir:"targetnat",
     descripcion:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio magnam alias aliquid laborum voluptas nostrum hic vitae ad animi voluptatum nihil natus repellat, maiores doloribus iste libero voluptate vel magni.",
     nombreartistico:"Natt T."
    
   },
 
   {
     url:'assets/Imagenes/juans.jpg',
     dir:"targetjuan",
     descripcion:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio magnam alias aliquid laborum voluptas nostrum hic vitae ad animi voluptatum nihil natus repellat, maiores doloribus iste libero voluptate vel magni.",
     nombreartistico:"Juan E."  
    
   },
 
   {
     url:'assets/Imagenes/omars.jpg',
     dir:"targetomar",
     descripcion:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio magnam alias aliquid laborum voluptas nostrum hic vitae ad animi voluptatum nihil natus repellat, maiores doloribus iste libero voluptate vel magni.",
     nombreartistico:"Omarc A."
    
   },
 
   {
     url:'assets/Imagenes/jorgitof.jpg',
     dir:"targetjorgito",
     descripcion:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio magnam alias aliquid laborum voluptas nostrum hic vitae ad animi voluptatum nihil natus repellat, maiores doloribus iste libero voluptate vel magni.",
     nombreartistico:"Jorge C."
    
   },
 
   {
     url:'assets/Imagenes/ovideos.jpg',
     dir:"targetovideo",
     descripcion:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio magnam alias aliquid laborum voluptas nostrum hic vitae ad animi voluptatum nihil natus repellat, maiores doloribus iste libero voluptate vel magni.",
     nombreartistico:"Ovideo S."
    
   },
 
   
 
 
 
 
 
   ];
 


  constructor() { }

  ngOnInit(): void {
  }

ejecutardisparador()
{
  console.log(this.galerias[1].target)
this.disparador = this.disparador === true ? false : true;



}

}
