import { Component } from '@angular/core';
import { HEROES } from './mock.heroes';
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