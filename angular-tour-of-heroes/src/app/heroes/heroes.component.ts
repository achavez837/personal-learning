import { Component } from '@angular/core';
import { Hero } from '../hero';
import { FormsModule } from '@angular/forms';
import { CommonModule, NgFor } from '@angular/common';
import { HEROES } from '../mock-heroes';

@Component({
  selector: 'app-heroes',
  standalone: true,
  imports: [FormsModule, CommonModule, NgFor],
  templateUrl: './heroes.component.html',
  styleUrl: './heroes.component.scss'
})
export class HeroesComponent {

heroes = HEROES;
selectedHero?: Hero;

onSelect(hero: Hero): void {
  this.selectedHero = hero;
}


}
