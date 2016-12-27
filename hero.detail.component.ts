import { Component, Input, Injectable, OnInit  } from '@angular/core';
import { Hero } from './hero';
import { HEROES } from './mock.heroes';
import { ActivatedRoute, Params }   from '@angular/router';
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