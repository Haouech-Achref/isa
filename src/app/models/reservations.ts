import { Equipements } from './Equipements';
import { Projects } from './Projects';

export class Reservations {
    id : number ;
    date_debut : String ;
    date_fin : String ;

    equipements : Equipements[];
    projects : Projects[];

}
