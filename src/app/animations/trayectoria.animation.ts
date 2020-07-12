import {trigger,style,transition,animate,state} from '@angular/animations';


export const mostrartrayectoria = trigger('mostrartrayectoria',[

    state('false',style({
        transition:'scale(10%)'

    })),

    state('true',style({
        transition:'scale(-10%)'

    })),

    transition('true=>false',animate('3s ease-out')),
    transition('false=>true',animate('3s ease-out'))




]);