import Dexie, { Table } from 'dexie';

export interface Queue {
  id?: number;
  name: string;
  game: string | null;
  service: string;
}

export interface Client {
  id?: number;
  name: string;
  facebook: string;
  mobile: string;
  services: number;
}

export interface Services {
  id?: number;
  clientid: number;
  grinderid: number;
  name: string;
  game: string;
  service: string;
  status: string;
  grinder: string;
  cost: string;
  start: string;
  end: string;
}

export interface Grinders {
  id?: number;
  name: string;
  grinds: number;
}

export class MySubClassedDexie extends Dexie {
  // 'friends' is added by dexie when declaring the stores()
  // We just tell the typing system this is the case
  queue!: Table<Queue>;

  clients!: Table<Queue>;

  services!: Table<Services>;

  grinder!: Table<Grinders>;

  constructor() {
    super('app-db');
    this.version(1).stores({
      queue: '++id, name, game, service', // Primary key and indexed props
      clients: '++id, name, facebook, mobile, services',
      services:
        '++id, clientid, grinderid, name, game, service, status, grinder, cost, start, end',
      grinders: '++id, name, grinds',
    });
  }
}

export const db = new MySubClassedDexie();
