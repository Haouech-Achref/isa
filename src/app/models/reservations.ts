import { Equipements } from './Equipements';
import { Project } from './Project';

export class Reservations {
    id : number ;
    date_debut : String ;
    date_fin : String ;

    equipements : Equipements[];
    projects : Project[];

}
