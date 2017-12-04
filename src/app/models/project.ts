import { Members } from './members';
import { Reservations } from './reservations';
import { ToDoLists } from './to-do-lists';

export class Project {
    id: number ;
    description: string;
    status: string;
    name: string ;
    type: string ;
    manager: string;
    reservations: Reservations [];
    toDoLists: ToDoLists [] ;
    team: Members[];
}
