import { Component, Input, Injectable, OnInit, ChangeDetectorRef  } from '@angular/core';
import { ActivatedRoute, Params }   from '@angular/router';
import { Location } from '@angular/common';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/toPromise';

let HEROES: Hero[];

@Injectable()
export class HeroService {
	constructor(private http: Http, private chRef: ChangeDetectorRef) { 
		this.http = http;
		this.chRef = chRef;
	}
	getHeros(): void {
		this.http.get('http://jsonplaceholder.typicode.com/users')
			.toPromise()
			.then(response => {
				HEROES = response.json();
				this.chRef.detectChanges();
			})
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
	`,
	providers: [HeroService]
})
export class AppComponent implements OnInit {
	constructor(private heroService: HeroService) { }
	ngOnInit(): void {
		this.heroService.getHeros()
	}
	title = "Tour of heroes"
}

@Component({
	selector: 'my-heroes',
	template:`
		<h2>My Heroes</h2>
		<ul class="heroes">
		  <li *ngFor="let hero of countryCodes" (click)="select(hero)">
			  <span class="badge">{{hero.id}}</span> {{hero.name}}
		  </li>
		</ul>
		<hero-details [hero]="selectedHero"></hero-details>
	`
})
export class HeroesComponent{
	title = 'Tour of Heroes';
	hero: Hero = {
	  id: 1,
	  name: 'Windstorm'
	};
	heroes: Hero[] = HEROES;
	selectedHero= {};
    get countryCodes() { return HEROES; }
	changeHeroName(newName: string){
		this.hero.name = newName;
	}
	select(selectedHero: Hero): void{
		this.selectedHero = selectedHero;
	}
}

export class Hero {
  id: number;
  name: string;
}

@Component({
	selector: "hero-details",
	template: `
		<div *ngIf=hero>
			<div>
				<h4>{{hero.name}} details</h4>
				<label> id: {{hero.id}} </label>
			</div>
			<input type="text" [(ngModel)]="hero.name">
		</div>
		<button (click)="goBack()">Back</button>
	`
})
export class HeroDetailComponent implements OnInit{
	constructor(private route:ActivatedRoute, private location: Location) {
	}
	@Input()
	hero: Hero;
	ngOnInit(): void {
		this.route.params.subscribe(params => {
			this.hero = HEROES[params["id"]];
		})
    }
	goBack(): void {
		this.location.back();
	}
}

@Component({
	selector: "my-dashboard",
	template: `
	  <a *ngFor="let hero of countryCodes; let i = index"  [routerLink]="['/detail', i]"  class="col-1-4">
		<div class="module hero">
		  <h4>{{hero.name}}</h4>
		</div>
	  </a>
	`
})
export class DashboardComponent{
    get countryCodes() { return HEROES; }
}