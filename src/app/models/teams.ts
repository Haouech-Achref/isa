import { Project } from './project';
import { Members } from './members';
import { Events } from 'app/models/events';

export class Teams {
    id : number ;
    name : string;
    projects : Project [] ;
    members : Members [];
    events : Events [];
}
