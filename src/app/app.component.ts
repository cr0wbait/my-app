import { Component } from '@angular/core';
import { Hero } from './hero';

const HEROES: Hero[] =[
  {id: 1, name: 'Galeforce'},
  {id: 2, name: 'Guardian'},
  {id: 3, name: 'Lateral'},
  {id: 4, name: 'Saitama'},
  {id: 5, name: 'Genos'},
  {id: 6, name: 'Physical Remover'},
  {id: 7, name: 'Assblaster'},
  {id: 8, name: 'The Donald'},
  {id: 9, name: 'God-Emperor'},
  {id: 10, name: 'Antarctic Ice Walls'},
  {id: 11, name: 'Lord Ice'},
  {id: 12, name: 'Cocaen'},
  {id: 13, name: 'Barrage'},
  {id: 14, name: 'Blink'},
  {id: 15, name: 'Gravit'},
  {id: 16, name: 'Flex'},
  {id: 17, name: 'Cum-Dripping Cunt'},
  {id: 18, name: 'Doc Oq'},
  {id: 19, name: 'Flareite'},
  {id: 20, name: 'Gust'}
];

@Component({
  selector: 'app-root',
  template: `
    <h1>{{title}}</h1>
    <h2>My Heroes</h2>
    <ul class='heroes'>
      <li *ngFor='let hero of heroes'
      [class.selected]='hero===selectedHero'
      (click)='onSelect(hero)'>
        <span class='badge'>{{hero.id}}</span> {{hero.name}}
      </li>
    </ul>
  `,
  styles: [`

    h1 {
      color: #369;
      font-family: Arial, Helvetica, sans-serif;
      font-size: 250%;
    }

    .selected {
      background-color: #CFD8DC !important;
      color: white;
    }
    .heroes {
      margin: 0 0 2em 0;
      list-style-type: none;
      padding: 0;
      width: 15em;
    }
    .heroes li {
      cursor: pointer;
      position: relative;
      left: 0;
      background-color: #EEE;
      margin: 0.5em;
      padding: 0.3em 0;
      border-radius: 4px;
    }
    .heroes li.selected:hover {
      background-color: #BBD8DC !important;
      color: white;
    }
    .heroes li:hover{
      color: #607D8B;
      background-color: #DDD;
      left: 0.1em;
    }
    .heroes .text {
      position: relative;
      top: -3px;
    }
    .heroes .badge {
      display: inline-block;
      font-size: small;
      color: white;
      padding: 0.8em 0.7em 0 0.7em;
      background-color: #607D8B;
      line-height: 1em;
      position: relative;
      left: -1px;
      top: -4px;
      height: 1.8em;
      margin-right: 0.8em;
      border-radius: 4px 0 0 4px;
    }
  `]
})

export class AppComponent {
  title = 'Tour of Heroes';
  heroes = HEROES;
  selectedHero: Hero;
  onSelect(hero: Hero): void {
    this.selectedHero = hero;
    }
  }
