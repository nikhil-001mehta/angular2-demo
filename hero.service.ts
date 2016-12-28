import { HEROES }from './mock.heroes';
import { Hero } from './hero';
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class HeroService {
	url: string;
	constructor(private http: Http){
		this.url = "http://jsonplaceholder.typicode.com/users";
	}
	getHeros(): Promise<Hero[]> {
		if(!HEROES || HEROES.length == 0) {
			return this.http.get(this.url)
				.toPromise()
				.then(response => {
					//HEROES = response.json();
					response.json().forEach(function(hero: Hero, index: number){
						HEROES.push(new Hero(Number(hero.id),hero.name));
					});
				});
		} else {
			let promise: Promise<Hero[]> = new Promise<Hero[]>(function(resolve, reject){
				resolve(HEROES);
			});
			return promise;
		}
	}
}