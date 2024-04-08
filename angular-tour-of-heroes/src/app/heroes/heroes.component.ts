import { Component } from '@angular/core';
import {Hero} from '..\hero.ts';

@Component({
  selector: 'app-heroes',
  standalone: true,
  imports: [],
  templateUrl: './heroes.component.html',
  styleUrl: './heroes.component.css'
})
export class HeroesComponent {
  hero: 'Viper'{
    id: 1,
    name: 'Viper'
  };
}
