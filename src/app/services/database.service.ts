import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const members = [
      {
        id: 11,
        name: 'Achref',
        lastname: 'Haouech',
        description: 'Retard at work.',
        level: '3',
        phone: 3251,
        section: 'GL',
        manageteams: [],
        email: 'haouech@outlook.com',
        password: 'somepass',
        role: 'webmaster'
      },
      {
        id: 12,
        name: 'Narco',
        lastname: 'torj',
        level: '3',
        phone: 3250,
        section: 'GL',
        manageteams: [],
        email: 'haouech@gmail.com',
        password: 'someotherpass'
      }
    ];
    const projects = [
      {
        id: 1,
        name: 'Something something techies',
        description: 'on suicide watch',
        status: 'On-going'
      },
      {
        id: 2,
        name: 'Pls work',
        status: 'Done',
        description: 'You have reached Dennaton Enterprises, we can\'t take your call at the moment. Please leave a message after the beep and we\'ll get back to you. ',
        team: [
          {
            id: 11,
            name: 'Achref',
            lastname: 'Haouech',
            description: 'Retard at work.',
            level: '3',
            phone: 3251,
            section: 'GL',
            manageteams: [],
            email: 'haouech@outlook.com',
            password: 'somepass',
            role: 'webmaster'
          },
          {
            id: 12,
            name: 'Narco',
            lastname: 'torj',
            level: '3',
            phone: 3250,
            section: 'GL',
            manageteams: [],
            email: 'haouech@gmail.com',
            password: 'someotherpass'
          }
        ],
        todo: [
          {
            id: 1,
            status: 'On-going',
            description: 'Polish profile page',
            deadline: '2017-06-01',

          },
          {
            id: 2,
            status: 'Done',
            description: 'Play darkest dungeon',
            deadline: '2018-08-01',

          },
          {
            id: 3,
            status: 'Dropped',
            description: 'Add equipment page',
            deadline: '2017-06-30',

          },
        ]
      },
      {
        id: 3,
        name: 'isa tool 2',
        status: 'Dropped',
        team: [
          {
            id: 11,
            name: 'Achref',
            lastname: 'Haouech',
            description: 'Retard at work.',
            level: '3',
            phone: 3251,
            section: 'GL',
            manageteams: [],
            email: 'haouech@outlook.com',
            password: 'somepass',
            role: 'webmaster'
          },
          {
            id: 12,
            name: 'Narco',
            lastname: 'torj',
            level: '3',
            phone: 3250,
            section: 'GL',
            manageteams: [],
            email: 'haouech@gmail.com',
            password: 'someotherpass'
          }
        ]
      },
      {
        id: 4,
        name: 'isa tool',
        status: 'Halted',
        team: [
          {
            id: 11,
            name: 'Achref',
            lastname: 'Haouech',
            description: 'Retard at work.',
            level: '3',
            phone: 3251,
            section: 'GL',
            manageteams: [],
            email: 'haouech@outlook.com',
            password: 'somepass',
            role: 'webmaster'
          },
          {
            id: 12,
            name: 'Narco',
            lastname: 'torj',
            level: '3',
            phone: 3250,
            section: 'GL',
            manageteams: [],
            email: 'haouech@gmail.com',
            password: 'someotherpass'
          }
        ]
      }
    ];
    return { members, projects };
  }
}
