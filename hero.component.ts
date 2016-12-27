import { Component, Input, Injectable, OnInit  } from '@angular/core';
import { HeroService } from './hero.service';
import { Hero } from './hero';
import {HEROES } from './mock.heroes'
@Component({
	selector: 'my-heroes',
	template:`
		<h2>My Heroes</h2>
		<ul class="heroes">
		  <li *ngFor="let hero of getHeroes" (click)="select(hero)">
			  <span class="badge">{{hero.id}}</span> {{hero.name}}
		  </li>
		</ul>
		<hero-details [hero]="selectedHero"></hero-details>
	`,
	providers: [HeroService]
})
export class HeroesComponent {
	constructor(private heroService: HeroService) { }
	get getHeroes() {return HEROES; }
	selectedHero= {};
	select(selectedHero: Hero): void{
		this.selectedHero = selectedHero;
	}
}
