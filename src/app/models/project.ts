import { Reservations } from './reservations';
import { ToDoLists } from './to-do-lists';

export class Project {
    id : number ;
    description : string;
    name : string ;
    type : string ;
    
    reservations : Reservations [];
    toDoLists : ToDoLists [] ;
    

}
