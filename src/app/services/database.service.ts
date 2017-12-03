import { InMemoryDbService } from "angular-in-memory-web-api";

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const members = [
      {
        id: 11,
        name: "Achref",
        lastname: "Haouech",
        description: "Retard at work.",
        level: "3",
        phone: 3251,
        section: "GL",
        manageteams: [],
        email: "haouech@outlook.com",
        password: "somepass",
        role: "webmaster"
      },
      {
        id: 12,
        name: "Narco",
        lastname: "torj",
        level: "3",
        phone: 3250,
        section: "GL",
        manageteams: [],
        email: "haouech@gmail.com",
        password: "someotherpass"
      }
    ];
    const projects = [
      {
        id: 1,
        name: "Something something techies",
        description: "on suicide watch",
        manager: "Some guy",
        status: "On-going"
      },
      { id: 2, name: "Pls work", manager: "promocode: BSJ", status: "Done" },
      { id: 3, name: "isa tool", manager: "a retard", status: "Dropped" },
      { id: 4, name: "isa tool", manager: "a retard", status: "Halted" }
    ];
    return { members, projects };
  }
}
