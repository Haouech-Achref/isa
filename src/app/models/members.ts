import { Teams } from 'app/models/teams';



export class Members {
    id?: number;
    email: string ;
    github?: string ;
    inscriptionDate?: string ;
    lastName: string ;
    name: string ;
    level: string ;
    phone: number ;
    section: string ;
    password: string;
    description: string;
    manageteams: Teams [];
    role: string;

}
