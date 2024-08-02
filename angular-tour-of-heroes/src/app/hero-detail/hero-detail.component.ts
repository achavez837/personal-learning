import { Component, Input } from '@angular/core';
import { Hero } from '../hero';
import { FormsModule } from '@angular/forms';
import { CommonModule, NgFor } from '@angular/common';

@Component({
  selector: 'app-hero-detail',
  standalone: true,
  imports: [FormsModule, CommonModule, NgFor],
  templateUrl: './hero-detail.component.html',
  styleUrl: './hero-detail.component.scss'
})
export class HeroDetailComponent {

@Input() hero?: Hero;

}
