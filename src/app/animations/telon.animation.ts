import {trigger,style,transition,animate,state} from '@angular/animations';


export const showup  = trigger('showUp',[
state('false',style({
    maxHeight:'40px',
    backgroundColor: 'red',
    transform: 'translate(-3em)'


})),

state('true',style({
maxHeight:'500px',
backgroundColor: 'green',
transform: 'translate(30em) '

})),

transition('false => true',animate('0.4s ease-out')),
transition('true => false',animate('0.5s ease-out'))

]);