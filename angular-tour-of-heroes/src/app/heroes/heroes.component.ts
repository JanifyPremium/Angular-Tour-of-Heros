import { Component } from '@angular/core';
import { Hero } from '../hero';
import {HEROES} from '../mock-heroes';
import { NgFor, NgIf, UpperCasePipe } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css'],
  standalone: true, 
  imports: [
    NgFor,
    NgIf,
    UpperCasePipe,
    FormsModule,
  ],
})
export class HeroesComponent {
  hero: Hero = {
    id: 1,
    name: 'Viper'
  };
  heroes = HEROES;
}