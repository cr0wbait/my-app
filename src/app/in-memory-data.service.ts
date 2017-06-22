import { InMemoryDbService } from 'angular-in-memory-web-api';
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const heroes = [
    {id: 0, name: 'Nil'},
    {id: 1, name: 'Galeforce'},
    {id: 2, name: 'Guardian'},
    {id: 3, name: 'Lateral'},
    {id: 4, name: 'Saitama'},
    {id: 5, name: 'Genos'},
    {id: 6, name: 'Physical Remover'},
    {id: 7, name: 'Massdrive'},
    {id: 8, name: 'The Donald'},
    {id: 9, name: 'God-Emperor'},
    {id: 10, name: 'Antarctic Ice Walls'},
    {id: 11, name: 'Lord Ice'},
    {id: 12, name: 'Cocaen'},
    {id: 13, name: 'Barrage'},
    {id: 14, name: 'Blink'},
    {id: 15, name: 'Gravit'},
    {id: 16, name: 'Flex'},
    {id: 17, name: 'Lizzard'},
    {id: 18, name: 'Doc Oq'},
    {id: 19, name: 'Flareite'},
    {id: 20, name: 'Gust'}
    ];
    return {heroes};
  }
}
