import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent, HeroDetailComponent  }  from './app.component';
import { FormsModule }   from '@angular/forms';
@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, HeroDetailComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { } 
