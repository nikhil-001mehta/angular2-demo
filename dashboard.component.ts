import { Component } from '@angular/core';
import { HEROES } from './mock.heroes';
import { OnInit } from '@angular/core';
import { HeroService } from './hero.service';
@Component({
	selector: "my-dashboard",
	template: `
	  <a *ngFor="let hero of getHeros; let i = index"  [routerLink]="['/detail', i]"  class="col-1-4">
		<div class="module hero">
		  <h4>{{hero.name}}</h4>
		</div>
	  </a>
	`,
	providers: [HeroService]
})
export class DashboardComponent implements OnInit{
	constructor(private heroService: HeroService){
		this.heroService = heroService
	}
	get getHeros() { return HEROES; }
	ngOnInit(): void {
		this.heroService.getHeros();
	}
}