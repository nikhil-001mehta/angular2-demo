import { Component, Input, Injectable, OnInit  } from '@angular/core';
@Injectable()
export class HeroService {
	getHeros(): Promise {
		let promise : Promise = new Promise(function(resolve,reject){
			setTimeout(function(){
				resolve(HEROES);
			},3000);
		})
		return promise;
	}
}
@Component({
	selector: 'my-app',
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
export class AppComponent implements onInit{
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
	template: `<div><input type="text" [(ngModel)]="hero.name"></div>`
})
export class HeroDetailComponent {
	@Input()
	hero: Hero;
}