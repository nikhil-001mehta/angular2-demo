import { HEROES } from './mock.heroes';
import { Hero } from './hero';
import { Injectable } from '@angular/core';
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