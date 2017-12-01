import { Projects } from './projects';
import { Members } from './members';
import { Events } from 'app/models/events';

export class Teams {
    id : number ;
    name : string;

    projects : Projects [] ;
    members : Members [];
    events : Events [];
}
