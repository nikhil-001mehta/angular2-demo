import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent, HeroDetailComponent, HeroesComponent, DashboardComponent  }  from './app.component';
import { FormsModule }   from '@angular/forms';
import { RouterModule }   from '@angular/router';
import { HttpModule }    from '@angular/http';
@NgModule({
  imports:      [ 
	BrowserModule, 
	FormsModule, 
	HttpModule,
	RouterModule.forRoot([
	  {
		path: 'heroes',
		component: HeroesComponent
	  },
	  {
		path: 'dashboard',
		component: DashboardComponent
	  },
	  {
		path: '',
		redirectTo: "/dashboard",
		pathMatch: 'full'
	  },
	  {
		path: 'detail/:id',
		component: HeroDetailComponent
	  },
	])
],
  declarations: [ AppComponent, HeroDetailComponent, HeroesComponent, DashboardComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { } 
