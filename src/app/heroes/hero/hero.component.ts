import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent {

  name: string = 'Iron Man';
  age: number = 45;
  nameTwo: string = 'Spider Man'

  get capitalizedName():string{
    return this.name.toUpperCase()
  }

  getHeroDescription():string{
    
    return `${this.name} - ${this.age}`
  }

  changeHero():void{
    this.name = this.nameTwo
  }

  changeAge():void{
    this.age = 23
  }
  
  resetForm():void{
    this.name = 'Iron Man';
    this.age = 45;
  }

}
