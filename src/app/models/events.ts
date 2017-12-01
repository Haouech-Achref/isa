import { Teams } from "app/models/teams";

export class Events {
    id : number;
    date: string ;
    name : string;

    teams : Teams [];
}
