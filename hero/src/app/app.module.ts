import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HerodetailComponent } from './hero/herodetail.component';
import { HeroListComponent } from './hero/hero-list.component';
import { SearchHeroComponent } from './search-hero/search-hero.component';

@NgModule({
  declarations: [
    AppComponent,
    HerodetailComponent,
    HeroListComponent,
    SearchHeroComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
