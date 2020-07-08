import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-elenco',
  templateUrl: './elenco.component.html',
  styleUrls: ['./elenco.component.scss']
})
export class ElencoComponent implements OnInit {



  galerias:any[]=[
    {
      url:'assets/Imagenes/ninoserio.jpg',
      sec:'assets/Imagenes/ninosonrie'
     
    },
 
    {
     url:'assets/Imagenes/Actor.jpg',
     sec:'assets/Imagenes/ninosonrie'
    
   },
 
   {
     url:'assets/Imagenes/actriz.jpg',
     sec:'assets/Imagenes/ninosonrie'
    
   },
 
   {
     url:'assets/Imagenes/danny-trejo.jpg',
     sec:'assets/Imagenes/ninosonrie'
    
   },
 
   {
     url:'assets/Imagenes/descarga.jpg',
     sec:'assets/Imagenes/ninosonrie'
    
   },
 
   {
     url:'assets/Imagenes/images.jpg',
     sec:'assets/Imagenes/ninosonrie'
    
   },
 
   {
     url:'assets/Imagenes/descarga.jpg',
     sec:'assets/Imagenes/ninosonrie'
    
   },
 
   {
     url:'assets/Imagenes/ninosonrie.jpg',
     sec:'assets/Imagenes/ninonosonrie'
    
   },
 
   {
     url:'assets/Imagenes/descarga.jpg',
     sec:'assets/Imagenes/ninosonrie'
    
   },
 
   {
     url:'assets/Imagenes/images.jpg',
     sec:'assets/Imagenes/ninonosonrie'
    
   },
 
   {
     url:'assets/Imagenes/Actor.jpg',
     sec:'assets/Imagenes/ninonosonrie'
    
   },
 
   {
     url:'assets/Imagenes/actriz.jpg',
     sec:'assets/Imagenes/ninonosonrie'
    
   },
 
 
 
 
 
   ];
 


  constructor() { }

  ngOnInit(): void {
  }

}
