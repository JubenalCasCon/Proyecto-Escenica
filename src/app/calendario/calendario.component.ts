import { Component, OnInit } from '@angular/core';
import { CalendarOptions } from '@fullcalendar/angular';
import esLocale from '@fullcalendar/core/locales/es';



@Component({
  selector: 'app-calendario',
  templateUrl: './calendario.component.html',
  styleUrls: ['./calendario.component.scss']
})
export class CalendarioComponent implements OnInit {

  calendarOptions: CalendarOptions 



  handleDateClick(arg) {
    alert('date click! ' + arg.dateStr)
  }



imagendirector:string="assets/Imagenes/director.jpg"

  constructor() {

    this.calendarOptions = {
      locale:esLocale, 
      
            initialView: 'dayGridMonth',
           
            
            dateClick: this.handleDateClick.bind(this), // bind is important!
            events: [
              { title: 'Circus Mortis', date: '2020-07-20' },
              { title: 'Monotonias Teatro', date: '2020-07-29' },
              { title:'Semana Nacional  del Monólogo', start: '2020-07-10', end:'2020-07-17'}
            ],
        
           
        
        
          };



    

   
  
    

   }

  ngOnInit(): void {
   
  }

  

}


