import { Component, Input, Injectable, OnInit  } from '@angular/core';
import { HeroService } from './hero.service';
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
export class AppComponent {
	constructor(private heroService: HeroService) { }
	title = "Tour of heroes"
}