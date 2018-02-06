import { Members } from './members';
import { Reservations } from './reservations';
import { ToDo } from './to-do-lists';

export class Project {
    id: number ;
    description: string;
    status: string;
    name: string ;
    type: string ;
    reservations: Reservations [];
    toDo: ToDo [] ;
    team: Members[];
}
