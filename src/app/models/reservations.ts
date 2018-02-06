import { Hardware } from './Hardware';
import { Project } from './Project';

export class Reservations {
    id : number ;
    date_debut : String ;
    date_fin : String ;

    hardware : Hardware[];
    projects : Project[];

}
