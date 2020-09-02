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
      url:'assets/Imagenes/gilbertof.jpg',
      sec:'assets/Imagenes/gilbertos-copy-0.jpg',
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
     url:'assets/Imagenes/ovideos.jpg',
     sec:'assets/Imagenes/ovideos.jpg',
     target:"#targetovideo",
      dir:"targetovideo",
     des:"descripcion1"
     
    
   },

   {
     url:"assets/Imagenes/anne2.jpg",
     sec:"assets/Imagenes/anne.jpg",
     target:"#targetanne",
     dir:"targetanne",
     des:"descripcion1"
   }
 
   
 
 
 
 
 
   ];
 

   modales:any[]=[
    {
      url:'assets/Imagenes/gilbertof.jpg',
      sec:'assets/Imagenes/gilbertos-copy-0.jpg',
      dir:"targetgil",
      descripcion:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio magnam alias aliquid laborum voluptas nostrum hic vitae ad animi voluptatum nihil natus repellat, maiores doloribus iste libero voluptate vel magni.",
      nombreartistico:"Gilberto Rousse",
      leyenda:"El director"
      
     
    },
 
    {
      url:'assets/Imagenes/yazs.jpg',
      sec:'assets/Imagenes/yazf.jpg',
     dir:"targetyaz",
     descripcion:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio magnam alias aliquid laborum voluptas nostrum hic vitae ad animi voluptatum nihil natus repellat, maiores doloribus iste libero voluptate vel magni.",
     nombreartistico:"Yazz Castro.",
     leyenda:"La chica versatil"
     
    
   },
 
   {
    url:'assets/Imagenes/olivers.jpg',
    sec:'assets/Imagenes/oliverf.jpg',
     dir:"targetoliver",
     descripcion:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio magnam alias aliquid laborum voluptas nostrum hic vitae ad animi voluptatum nihil natus repellat, maiores doloribus iste libero voluptate vel magni.",
     nombreartistico:"Oliver Castro",
     leyenda:"El cómico"

    
   },
 
   {
    url:'assets/Imagenes/nats.jpg',
     sec:'assets/Imagenes/nat2.jpg',
    
     dir:"targetnat",
     descripcion:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio magnam alias aliquid laborum voluptas nostrum hic vitae ad animi voluptatum nihil natus repellat, maiores doloribus iste libero voluptate vel magni.",
     nombreartistico:"Natt Trejo",
     leyenda:"Una actriz con tremendo potencial"
    
   },
 
   {
    url:'assets/Imagenes/juans.jpg',
    sec:'assets/Imagenes/juanf.jpg',
     dir:"targetjuan",
     descripcion:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio magnam alias aliquid laborum voluptas nostrum hic vitae ad animi voluptatum nihil natus repellat, maiores doloribus iste libero voluptate vel magni.",
     nombreartistico:"Juan Espinoza",
     lenyenda:"El galan"  
    
   },
 
   {
    url:'assets/Imagenes/omars.jpg',
    sec:'assets/Imagenes/omarf.jpg',
     dir:"targetomar",
     descripcion:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio magnam alias aliquid laborum voluptas nostrum hic vitae ad animi voluptatum nihil natus repellat, maiores doloribus iste libero voluptate vel magni.",
     nombreartistico:"Omarc Antony",
     leyenda:"El que actua con el corazón"
    
   },
 
   {
    url:'assets/Imagenes/jorgitof.jpg',
    sec:'assets/Imagenes/jorgitos.jpg',
     dir:"targetjorgito",
     descripcion:"Soy Bere. Amante de los gatos. Trotamundos. Soy plenamente consciente de lo fortuito que es estar viva, y me encanta, ¡me encanta estar viva!Soy muy, muy poco paciente.Soy alegre por caracter. Soy feliz por decisión.Mexicana de nacimiento. Claustrofóbica de la rutina.Soy amante de la paz, detractora del drama.Soy fan de la naturaleza.",
     nombreartistico:"Jorge Castro",
     leyenda:"El músico"
    
   },
 
   {
    url:'assets/Imagenes/anne.jpg',
    sec:'assets/Imagenes/anne2.jpg',
     dir:"targetovideo",
     descripcion:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio magnam alias aliquid laborum voluptas nostrum hic vitae ad animi voluptatum nihil natus repellat, maiores doloribus iste libero voluptate vel magni.",
     nombreartistico:"Ovideo Gutierrez",
     leyenda:"El que improvisa"
    
   },

   {
     url:"assets/Imagenes/anne.jpg",
     sec:"assets/Imagenes/anne2.jpg",
     dir:"targetanne",
     descripcion:"Lorem",
     nombreartistico:"Anne Hathaway",
     leyenda:"Talento y belleza en una sola mujer"
   }
 
   
 
 
 
 
 
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
