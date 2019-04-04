import { Component, OnInit, Input } from '@angular/core';
import { Hero } from '../hero';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { HeroService }  from '../hero.service';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit {

  hero: Hero;
  constructor(
    private location: Location,
    private route: ActivatedRoute,
    private heroService: HeroService
  ) { }

  ngOnInit() {
    this.getHero();
  }
  getHero(): void{
    const id:number = +this.route.snapshot.paramMap.get('id');
    this.heroService.getHero(id).subscribe(hero=>this.hero=hero);
  }

  goBack(){
    this.location.back();
  }

  save(hero: Hero){
    this.heroService.updateHero(hero).subscribe(() => this.goBack());
  }
}
