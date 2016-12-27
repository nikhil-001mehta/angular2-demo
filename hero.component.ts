import { Component, Input, Injectable, OnInit  } from '@angular/core';
import { HeroService } from './hero.service';
import { Hero } from './hero';
@Component({
	selector: 'my-heroes',
	template:`
		<h2>My Heroes</h2>
		<ul class="heroes">
		  <li *ngFor="let hero of heroes" (click)="select(hero)">
			  <span class="badge">{{hero.id}}</span> {{hero.name}}
		  </li>
		</ul>
		<hero-details [hero]="selectedHero"></hero-details>
	`,
	providers: [HeroService]
})
export class HeroesComponent implements OnInit{
	constructor(private heroService: HeroService) { }
	title = 'Tour of Heroes';
	hero: Hero = {
	  id: 1,
	  name: 'Windstorm'
	};
	heroes: Hero[];
	getHeros(): void {
		this.heroService.getHeros().then(heroes => this.heroes = heroes);
	}
	selectedHero= {};
	changeHeroName(newName: string){
		this.hero.name = newName;
	}
	select(selectedHero: Hero): void{
		this.selectedHero = selectedHero;
	}
	ngOnInit(): void {
		this.getHeros();
	}
}
