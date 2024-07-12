import { Component } from "@angular/core";

@Component({
    selector: 'app-counter',
    templateUrl: './counter.component.html',
    styleUrls: ['./counter.component.css']

})
export class CounteComponent{
    counter:number = 12

    incrementBy(value:number):void{
      this.counter +=value
    }
  
    decrement(value:number):void{
      this.counter--
    }
    reset(){
       this.counter = 10
    }
    
}