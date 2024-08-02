import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeroesComponent } from './heroes/heroes.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    BrowserModule,
    HeroesComponent,
    AppComponent
  ],
  providers: [],
})
export class AppModule { }