import { Component } from '@angular/core';
import { Hero } from '../hero';
import { HeroService } from '../hero.service'; 
import { NgFor, NgIf, UpperCasePipe } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HeroDetailComponent } from "../hero-detail/hero-detail.component";

@Component({
    selector: "app-heroes",
    standalone: true,
    templateUrl: './heroes.component.html',
    styleUrls: ['./heroes.component.css'],
    imports: [
        FormsModule,
        NgFor,
        NgIf,
        UpperCasePipe,
        HeroDetailComponent
    ]
})
export class HeroesComponent {
  hero: Hero = {
    id: 1,
    name: 'Brimstone'
  };
  heroes : Hero [] = [];
  constructor(private heroService: HeroService) {}
}