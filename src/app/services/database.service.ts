import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const members = [
      { id: 11, name: 'Achref', lastname: 'Haouech', description: 'Retard at work.', level: '3', phone: 3251,
      section: 'GL' , manageteams: [], email: 'haouech@outlook.com', password: 'somepass', role: 'webmaster' },
      { id: 12, name: 'Narco', lastname: 'torj', level: '3', phone: 3250,
       section: 'GL' , manageteams: [], email: 'haouech@gmail.com', password: 'someotherpass' },
    ];
    return {members};
  }
}