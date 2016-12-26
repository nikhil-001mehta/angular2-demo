import { Component, Input, Injectable, OnInit  } from '@angular/core';
import { ActivatedRoute, Params }   from '@angular/router';
import { Location } from '@angular/common';

@Injectable()
export class HeroService {
	getHeros(): Promise<Hero[]> {
		let promise : Promise<Hero[]> = new Promise<Hero[]>(function(resolve,reject){
			setTimeout(function(){
				resolve(HEROES);
			},3000);
		})
		return promise;
	}
	getHero(id: any): Promise<Hero> {
		let promise : Promise<Hero> = new Promise<Hero>(function(resolve,reject){
			setTimeout(function(){
				resolve(HEROES[id]);
			},3000);
		})
		return promise;
	}
}

@Component({
	selector: "my-app",
	template: `
		<h1>{{title}}</h1>
		<nav>
		  <a routerLink="/dashboard" routerLinkActive="active">Dashboard</a>
		  <a routerLink="/heroes" routerLinkActive="active">Heroes</a>
		</nav>
		<router-outlet></router-outlet>
	`
})
export class AppComponent {
	title = "Tour of heroes"
}

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

const HEROES: Hero[] = [
  { id: 11, name: 'Mr. Nice' },
  { id: 12, name: 'Narco' },
  { id: 13, name: 'Bombasto' },
  { id: 14, name: 'Celeritas' },
  { id: 15, name: 'Magneta' },
  { id: 16, name: 'RubberMan' },
  { id: 17, name: 'Dynama' },
  { id: 18, name: 'Dr IQ' },
  { id: 19, name: 'Magma' },
  { id: 20, name: 'Tornado' }
];

export class Hero {
  id: number;
  name: string;
}

@Component({
	selector: "hero-details",
	template: `<div *ngIf=hero><input type="text" [(ngModel)]="hero.name"></div>`,
})
export class HeroDetailComponent implements OnInit{
	constructor(private route:ActivatedRoute){
		
	}
	selectedHeroId: any;
	@Input()
	hero: Hero;
	ngOnInit(): void {
		this.route.params.subscribe(params => {
			this.hero = HEROES[params["id"]];
		})
    }
}

@Component({
	selector: "my-dashboard",
	template: `
	  <a *ngFor="let hero of heroes; let i = index"  [routerLink]="['/detail', i]"  class="col-1-4">
		<div class="module hero">
		  <h4>{{hero.name}}</h4>
		</div>
	  </a>
	`
})
export class DashboardComponent{
	heroes = HEROES
}