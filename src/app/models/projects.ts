import { Reservations } from './reservations';
import { ToDoLists } from './to-do-lists';

export class Projects {
    id : number ;
    description : string;
    name : string ;
    type : string ;
    
    reservations : Reservations [];
    toDoLists : ToDoLists [] ;
    

}
